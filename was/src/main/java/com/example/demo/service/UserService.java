package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.example.demo.entity.UserEntity;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface UserService {
	public List<UserEntity> findAllUser();

	public ResponseEntity<UserEntity> signUp(UserEntity user);

	public UserEntity selectUserById(int id);

	public String deleteUserById(int id);

	public UserEntity updateUserById(UserEntity user);

	public Optional<UserEntity> login(UserEntity userInfo, HttpServletResponse response);

	public boolean logOut(HttpServletRequest request, HttpServletResponse response);

	public int checkEmail(String email);

	public Optional<UserEntity> retrieveByEmail(String email);

	public UserEntity findByEmail(String email);

}
