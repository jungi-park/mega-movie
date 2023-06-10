package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;


@RestController
@RequestMapping("/v1")
public class UserController {
	@Autowired
	private  UserRepository userRepository;
	
	 @GetMapping("user")
	    public List<UserEntity> findAllMember() {
	        return userRepository.findAll();
	    }
	
//
//	@GetMapping("/user")
//	public String hi() {
//		return "hi there~";
//	}

}
