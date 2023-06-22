package com.example.demo.service;

import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.core.Authentication;

import com.example.demo.entity.UserEntity;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

public interface JwtService {
	 
	 
	 public Map<String, Object> verifyJWT(String jwt) throws UnsupportedEncodingException;
	 
	 public Authentication getAuthentication(String accessToken);
	 
	 public Jws<Claims> getClaims(String jwt);

	 public String createToken(UserEntity user);
}
