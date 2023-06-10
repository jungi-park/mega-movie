package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.UserEntity;

public interface UserService {
	public List<UserEntity> findAllUser();
	
	public UserEntity signUp(UserEntity user);
	
	public UserEntity selectUserById(int id);
	
	public String deleteUserById(int id);

	public UserEntity updateUserById(UserEntity user);
}
