package com.example.demo.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private TokenProvider tokenProvider;


	@Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http.csrf().disable()
	        .httpBasic().disable()
	        .cors().configurationSource(corsConfigurationSource());
	        http.authorizeHttpRequests()
	        .requestMatchers("/v1/signin", "/**").permitAll();
//	                .requestMatchers("/v1/user/**").authenticated()
//	                .requestMatchers("/v1/admin/**").hasAnyRole("hasRole('ROLE_ADMIN')")
//	                .anyRequest().permitAll();
	        
	        
	        http.addFilterBefore(new JwtAuthenticationFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class);
	          

	        return http.build();
	    }
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.addAllowedOrigin("http://localhost:3000");
	    configuration.addAllowedMethod("*");
	    configuration.addAllowedHeader("*");	
	    configuration.setAllowCredentials(true);
	    configuration.setMaxAge(3000L);
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}


}
