package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private TokenProvider tokenProvider;

	@Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http.csrf().disable()
	        .httpBasic().disable();
	        http.authorizeHttpRequests()
	                .requestMatchers("/v1/user/**").authenticated()
	                .requestMatchers("/v1/admin/**").hasAnyRole("hasRole('ROLE_ADMIN')")
	                .anyRequest().permitAll();
	        
	        http.addFilterBefore(new JwtAuthenticationFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class);
	          

	        return http.build();
	    }

}
