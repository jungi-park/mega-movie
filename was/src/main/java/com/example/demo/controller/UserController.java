package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/v1")
public class UserController {

	private UserService userService;

	public UserController() {
		super();
	}

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	/**
	 * 회원가입
	 * 
	 * @return
	 */
	@PostMapping("signup")
	public ResponseEntity<UserEntity> signUp(@RequestBody UserEntity user) {
		return userService.signUp(user);
	}


	/**
	 * 로그인
	 * 
	 * @return
	 */
	@PostMapping("/login")
	public UserEntity logIn(@RequestBody UserEntity user, HttpServletResponse response) {
		Optional<UserEntity> userEntity = userService.login(user, response);
		return userEntity.orElseGet(() -> {
			return new UserEntity();
		});
	}

	/**
	 * 로그아웃
	 * 
	 * @return
	 */
	@PostMapping("/logout")
	public boolean logOut(@RequestBody UserEntity user, HttpServletRequest request, HttpServletResponse response) {
		return userService.logOut(request, response);
	}

	/**
	 * 이메일을 통한 유저조회
	 * 
	 * @return
	 */

	@GetMapping("/user/mypage")
	public UserEntity findByEmail(@RequestParam("email") String email) {
		return userService.findByEmail(email);
	}
	
	/**
	 * 멤버 수정
	 * 
	 * @return
	 */

	@PutMapping("/user/mypage")
	public UserEntity updateUser(@RequestBody UserEntity user) {
		return userService.updateUserById(user);
	}

}
