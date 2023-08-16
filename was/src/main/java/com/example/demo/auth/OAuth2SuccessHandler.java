package com.example.demo.auth;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.demo.config.TokenProvider;
import com.example.demo.entity.UserEntity;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	private TokenProvider tokenProvider;
	@Value("${jwt.tokenKey}")
	private String tokenKey;

	@Autowired
	public OAuth2SuccessHandler(TokenProvider tokenProvider) {
		super();
		this.tokenProvider = tokenProvider;
	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		UserEntity user = (UserEntity) authentication.getPrincipal();
		String targetUrl;
		String accessToken = tokenProvider.createToken(user);

		Cookie cookie = new Cookie(tokenKey, accessToken);
		cookie.setPath("/");
		cookie.setMaxAge(60 * 60);
		cookie.setHttpOnly(true);
		cookie.setSecure(true);
		response.addCookie(cookie);

		targetUrl = UriComponentsBuilder.fromUriString("http://localhost:3000/oauth/signin").queryParam("email", user.getEmail()).queryParam("name",user.getName()).toUriString();
		getRedirectStrategy().sendRedirect(request, response, targetUrl);
	}

}
