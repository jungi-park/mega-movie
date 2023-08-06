package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.service.PrincipalOAuth2DetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private TokenProvider tokenProvider;
	private PrincipalOAuth2DetailsService principalOAuth2DetailsService;

	public SecurityConfig() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public SecurityConfig(TokenProvider tokenProvider,PrincipalOAuth2DetailsService principalOAuth2DetailsService) {
		super();
		this.tokenProvider = tokenProvider;
		this.principalOAuth2DetailsService = principalOAuth2DetailsService;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrfConfig->csrfConfig.disable()).httpBasic(httpBasicConfig->httpBasicConfig.disable()).cors(corsConfig -> corsConfig.configurationSource(corsConfigurationSource()));
		http.sessionManagement(sessionConfig -> sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		http.formLogin(formConfig -> formConfig.disable());

		http.authorizeHttpRequests(requestConfig -> requestConfig.requestMatchers("/v1/admin/**").hasAnyRole("ADMIN").requestMatchers("/v1/login").permitAll()
				.requestMatchers("/v1/logout").permitAll().requestMatchers("/v1/user").permitAll().requestMatchers("/v1/google/**").permitAll());
//	        .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
//				.requestMatchers("/v1/user/**").authenticated();

		
		http.oauth2Login().defaultSuccessUrl("/v1/google/login/redirect")
        .userInfoEndpoint()
        .userService(principalOAuth2DetailsService); 
		
		http.addFilterBefore(new JwtAuthenticationFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration config = new CorsConfiguration();

		config.addAllowedOrigin("http://localhost:3000");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		config.setAllowCredentials(true);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);
		return source;
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
