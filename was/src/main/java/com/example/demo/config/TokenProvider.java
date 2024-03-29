package com.example.demo.config;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserEntity;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class TokenProvider {
	@Value("${jwt.secretKey}")
	private String secretKey;
	// 만료시간 : 1시간
	private final long exp = 1000L * 60 * 60;

	// jwt 토큰 생성
	public String createToken(UserEntity user) {// payload에 넣을 파라미터
		// 자신이 넣고자 하는 파라미터의 수에 따라 payload의 값은 변경된다.

		// Header 부분 설정
		Map<String, Object> headers = new HashMap<>();
		headers.put("typ", "JWT");
		headers.put("alg", "HS256");
		// 헤더에는 jwt의 암호화 방법 정보가 들어있다.

		// payload 부분 설정
		Map<String, Object> payloads = new HashMap<>();
		payloads.put("email", user.getEmail());

		switch (user.getType()) {
		case "1": {
			payloads.put("auth", "ROLE_USER");
			break;
		}
		case "2": {
			payloads.put("auth", "ROLE_ADMIN");
			break;
		}
		default:

		}

		// 실제적인 jwt의 데이터를 담당하는 부분이다.

		Date now = new Date();
		// 토큰 Builder
		String jwt = Jwts.builder().setHeader(headers) // Headers 설정
				.setSubject(user.getEmail()) // 사용자
				.setClaims(payloads) // Claims 설정
				// [3] 만료 시간
				.setExpiration(new Date(System.currentTimeMillis()  + exp))
				// [4] 발급 시간
				.setIssuedAt(now).signWith(SignatureAlgorithm.HS256, secretKey.getBytes()) // HS256과 Key로 Sign
				.compact(); // 토큰 생성

		return jwt;
	}

	// jwt 토큰 검증
	public Map<String, Object> verifyJWT(String jwt, HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		Map<String, Object> claimMap = null;
		try {
			Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()) // 키 설정
					.parseClaimsJws(jwt) // jwt의 정보를 파싱해서 시그니처 값을 검증한다.
					.getBody();

			claimMap = claims;

		} catch (ExpiredJwtException e) { // 토큰이 만료되었을 경우
			System.out.println(e);
			this.setErrorResponse(request, response, e);

		} catch (Exception e) { // 나머지 에러의 경우
			System.out.println(e);
			this.setErrorResponse(request, response, e);
		}
		return claimMap;
	}

	// JWT 토큰을 복호화하여 토큰에 들어있는 정보를 꺼내는 메서드
	public Authentication getAuthentication(String accessToken) {
		// 토큰 복호화
		Claims claims = getClaims(accessToken).getBody();

		if (claims.get("auth") == null) {
			throw new RuntimeException("권한 정보가 없는 토큰입니다.");
		}

		// 클레임에서 권한 정보 가져오기
		Collection<? extends GrantedAuthority> authorities = Arrays.stream(claims.get("auth").toString().split(","))
				.map(SimpleGrantedAuthority::new).collect(Collectors.toList());

		// UserDetails 객체를 만들어서 Authentication 리턴
		UserDetails principal = new User(claims.get("email").toString(), "", authorities);
		return new UsernamePasswordAuthenticationToken(principal, "", authorities);
	}

	public Jws<Claims> getClaims(String jwt) {
		try {
			// 암호화 키로 복호화한다.
			// 즉 암호화 키가 다르면 에러가 발생한다.
			return Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwt);
		} catch (SignatureException e) {
			return null;
		}
	}

	public void setErrorResponse(HttpServletRequest req, HttpServletResponse res, Throwable ex) throws IOException {

		res.setContentType(MediaType.APPLICATION_JSON_VALUE);

		final Map<String, Object> body = new HashMap<>();
		body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
		body.put("error", "Unauthorized");
		// ex.getMessage() 에는 jwtException을 발생시키면서 입력한 메세지가 들어있다.
		body.put("message", ex.getMessage());
		body.put("path", req.getServletPath());
		final ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(res.getOutputStream(), body);
		res.setStatus(HttpServletResponse.SC_OK);
	}

}
