package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private  UserRepository UserMapper;
	
	@Override
    public List<UserEntity> getUserList() {
       return  null;
    }

}
