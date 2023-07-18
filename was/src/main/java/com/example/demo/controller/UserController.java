package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.TokenProvider;
import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/v1")
public class UserController {
	@Autowired
	private UserService userService;

//	private final String tokenKey = "access_token";

	/**
	 * 멤버 전체 조회
	 * 
	 * @return
	 */
	@GetMapping("user")
	public List<UserEntity> findAllUser() {
		return userService.findAllUser();
	}

	/**
	 * 회원가입
	 * 
	 * @return
	 */
	@PostMapping("user")
	public UserEntity signUp(@RequestBody UserEntity user) {
		return userService.signUp(user);
	}

	/**
	 * 멤버 조회
	 * 
	 * @return
	 */
	@GetMapping("user/{id}")
	public UserEntity selectUserById(@PathVariable("id") int id) {
		return userService.selectUserById(id);
	}

	/**
	 * 멤버 수정
	 * 
	 * @return
	 */

	@PutMapping("user")
	public UserEntity updateUserById(@RequestBody UserEntity user) {
		return userService.updateUserById(user);
	}

	/**
	 * 멤버 삭제
	 * 
	 * @return
	 */

	@DeleteMapping("user/{id}")
	public String deleteUserById(@PathVariable("id") int id) {
		return userService.deleteUserById(id);
	}

	/**
	 * 로그인
	 * 
	 * @return
	 */
	@PostMapping("/login")
	public UserEntity logIn(@RequestBody UserEntity user, HttpServletResponse response) {
		Optional<UserEntity> userEntity = userService.login(user,response);
		return userEntity.orElseGet(()->{return new UserEntity();});
	}

	/**
	 * 로그아웃
	 * 
	 * @return
	 */
	@PostMapping("/logout")
	public boolean logOut(@RequestBody UserEntity user, HttpServletRequest request, HttpServletResponse response) {
		return userService.logOut(request,response);
	}

}
