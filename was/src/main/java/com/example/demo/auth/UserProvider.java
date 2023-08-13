package com.example.demo.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserProvider {

	private final UserRepository userRepo;

	@Autowired
	public UserProvider(UserRepository userRepo) {
		this.userRepo = userRepo;
	}

	public int checkEmail(String email) {
		if (userRepo.findByEmail(email).isPresent()) {
			return 1;
		}
		return 0;
	}

	public Optional<UserEntity> retrieveByEmail(String email) {
		if (checkEmail(email) == 0) {
			return null;
		}
		try {
			return userRepo.findByEmail(email);

		} catch (Exception e) {
			return null;
		}
	}
}