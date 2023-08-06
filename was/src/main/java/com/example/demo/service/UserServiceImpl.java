package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import com.example.demo.config.TokenProvider;
import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

	private UserRepository userRepository;
	private PasswordEncoder getPasswordEncoder;
	private TokenProvider tokenProvider;
	private AuthenticationManagerBuilder authenticationManagerBuilder;
	@Value("${jwt.tokenKey}")
	private String tokenKey;

	public UserServiceImpl() {
		super();
	}

	@Autowired
	public UserServiceImpl(UserRepository userRepository, PasswordEncoder getPasswordEncoder,
			TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
		super();
		this.userRepository = userRepository;
		this.getPasswordEncoder = getPasswordEncoder;
		this.tokenProvider = tokenProvider;
		this.authenticationManagerBuilder = authenticationManagerBuilder;
	}

	@Override
	public List<UserEntity> findAllUser() {
		return userRepository.findAll();
	}

	@Override
	public UserEntity signUp(UserEntity user) {
		Optional.ofNullable(user.getType()).ifPresentOrElse(null, () -> {
			user.setType("1");
		});
		return userRepository.save(user);
	}

	@Override
	public UserEntity selectUserById(int id) {
		Optional<UserEntity> user = userRepository.findById(id);

		UserEntity result = user.orElseGet(() -> {
			return null;
		});

		return result;
	}

	@Override
	public String deleteUserById(int id) {
		Optional<UserEntity> user = userRepository.findById(id);

		if (user.isPresent()) {
			userRepository.delete(user.get());
			return user.get().getName() + "님의 계정이 삭제 되었습니다.";
		} else {
			return "유저가 존재하지 않습니다.";
		}

	}

	@Override
	public UserEntity updateUserById(UserEntity user) {
		Optional<UserEntity> userExeist = userRepository.findById(user.getId());
		if (userExeist.isPresent()) {
			userRepository.save(user);
		} else {
			return null;
		}

		return user;
	}

	@Override
	public Optional<UserEntity> login(UserEntity userInfo, HttpServletResponse response) {

		Optional<UserEntity> user = userRepository.findByEmailAndPassword(userInfo.getEmail(), userInfo.getPassword());
//		if (user.isPresent()) {
			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
					userInfo.getEmail(), userInfo.getPassword());
			Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
			String token = tokenProvider.createToken(user.orElseGet(null));

			Cookie cookie = new Cookie(tokenKey, token);
			cookie.setPath("/");
			cookie.setMaxAge(60 * 60);
			cookie.setHttpOnly(true);
			cookie.setSecure(true);
			response.addCookie(cookie);
			return user;
//		}
//		;
//		return Optional.of(null);
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		System.out.println(email);
		UserEntity user = userRepository.findByEmail(email).orElseGet(null);
		if (user == null) {
			throw new UsernameNotFoundException(email);
		}
		user.setPassword(getPasswordEncoder.encode(user.getPassword()));
		return user;
	}

	@Override
	public boolean logOut(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
			for (Cookie cookie : request.getCookies()) {
				if (tokenKey.equals(cookie.getName())) {
					cookie.setPath("/");
					cookie.setMaxAge(0);
					response.addCookie(cookie);
					return true;
				}
			}
		}
		return false;
	}

}
