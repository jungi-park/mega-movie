package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.User;
import com.example.demo.mappers.UserMappers;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private  UserMappers UserMapper;
	
	@Override
    public List<User> getUserList() {
        return UserMapper.getUserList();
    }

}
