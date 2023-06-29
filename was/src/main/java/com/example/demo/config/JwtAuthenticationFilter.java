package com.example.demo.config;


import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

	private TokenProvider tokenProvider;

	public JwtAuthenticationFilter(TokenProvider tokenProvider) {
		this.tokenProvider = tokenProvider;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		if (request.getMethod().equals("OPTIONS")) {
		return;
	}
	// 1. Request Header 에서 JWT 토큰 추출

	String token = resolveCookieToken(request); 	
	

	// 2. validateToken 으로 토큰 유효성 검사
	if (token != null && !tokenProvider.verifyJWT(token).isEmpty()) {
		// 토큰이 유효할 경우 토큰에서 Authentication 객체를 가지고 와서 SecurityContext 에 저장
		Authentication authentication = tokenProvider.getAuthentication(token);
		SecurityContextHolder.getContext().setAuthentication(authentication);
	}
	chain.doFilter(request, response);
		
	}

	// Request Header 에서 토큰 정보 추출
	private String resolveToken(HttpServletRequest request) {
		String bearerToken = request.getHeader("Authorization");
		return bearerToken;
	}
	
	private String resolveCookieToken(HttpServletRequest req) {
		Cookie[] cookies = req.getCookies();
		if (cookies != null) {
			for (Cookie index : cookies) {
				String cookieName = index.getName();
				if (cookieName.equals("access_token")) {
					return index.getValue();
				}
			}
		}
		return null;
	}

	
}
