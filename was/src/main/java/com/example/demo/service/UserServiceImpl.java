package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.config.CustomDetails;
import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<UserEntity> findAllUser() {
		return userRepository.findAll();
	}

	@Override
	public UserEntity signUp(UserEntity user) {
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
	public Optional<UserEntity> login(UserEntity user) {
		return userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		System.out.println(email);
		UserEntity user = userRepository.findByEmail(email).orElseGet(null);
		if (user == null) {
			throw new UsernameNotFoundException(email);
		}
		return new CustomDetails(user);
	}
	
	

}
