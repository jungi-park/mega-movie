package com.example.demo.auth;

import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;

@Service
public class PrincipalOAuth2DetailsService extends DefaultOAuth2UserService {

	private PasswordEncoder passwordEncoder;
	private UserService userService;

	public PrincipalOAuth2DetailsService() {
		super();
	}

	@Autowired
	public PrincipalOAuth2DetailsService(PasswordEncoder passwordEncoder, UserService userService) {
		this.passwordEncoder = passwordEncoder;
		this.userService = userService;
	}

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuth2User oAuth2User = super.loadUser(userRequest);

		UserEntity user = setUser(userRequest, oAuth2User);

		try {
			if (userService.checkEmail(user.getEmail()) == 0) {
				userService.signUp(user);
			} else {
				user = userService.retrieveByEmail(user.getEmail()).orElseGet(null);
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

		return user;
	}

	public UserEntity setUser(OAuth2UserRequest userRequest, OAuth2User oAuth2User) {
		UserEntity user = new UserEntity();
		if (userRequest.getClientRegistration().getRegistrationId().equals("google")) {
			String username = oAuth2User.getAttributes().get("name").toString();
			String nickname = oAuth2User.getAttributes().get("name").toString();
			String email = oAuth2User.getAttributes().get("email").toString();
			String password = passwordEncoder.encode(email);
			String role = "ROLE_USER";
			String provider = userRequest.getClientRegistration().getRegistrationId();
			String provider_id = oAuth2User.getAttributes().get("sub").toString();

			user.setName(username);
			user.setEmail(email);
			user.setPassword(password);
			return user;
		} else if (userRequest.getClientRegistration().getRegistrationId().equals("naver")) {
			oAuth2User.getAttributes().get("response");
			Map<String, Object> response = (Map<String, Object>) oAuth2User.getAttributes().get("response");
			String username = (String) response.get("name");
			String email = (String) response.get("email");
			String password = passwordEncoder.encode(UUID.randomUUID().toString());
			user.setName(username);
			user.setEmail(email);
			user.setPassword(password);
			return user;
		} else if (userRequest.getClientRegistration().getRegistrationId().equals("kakao")) {
			Map<String, Object> attributes = oAuth2User.getAttributes();
			Map<String, Object> kakao_account = (Map<String, Object>) attributes.get("kakao_account");
			Map<String, Object> profile = (Map<String, Object>) kakao_account.get("profile");

			String username = (String) profile.get("nickname");
			String email = (String) kakao_account.get("email");
			String password = passwordEncoder.encode(UUID.randomUUID().toString());

			user.setName(username);
			user.setEmail(email);
			user.setPassword(password);
			return user;
		}
		return null;
	}
}