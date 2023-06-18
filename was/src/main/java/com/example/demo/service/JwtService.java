package com.example.demo.service;

import java.io.UnsupportedEncodingException;
import java.util.Map;

public interface JwtService {
	 
	 public String createToken(String id);
	 
	 public Map<String, Object> verifyJWT(String jwt) throws UnsupportedEncodingException;
}
