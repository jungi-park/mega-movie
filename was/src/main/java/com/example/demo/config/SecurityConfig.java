package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.demo.service.JwtService;

@EnableWebSecurity
public class SecurityConfig {
	
	private JwtService jwtService;

	@Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http.csrf().disable()
	        .httpBasic().disable();
	        http.authorizeHttpRequests()
	                .requestMatchers("/v1/user/**").authenticated()
	                .requestMatchers("/v1/admin/**").hasAnyRole("hasRole('ROLE_ADMIN')")
	                .anyRequest().permitAll();
	        
	        http.addFilterBefore(new JwtAuthenticationFilter(jwtService), UsernamePasswordAuthenticationFilter.class);
	          

	        return http.build();
	    }

}
