package com.example.demo.auth;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.example.demo.entity.UserEntity;


public class PrincipalDetails implements UserDetails, OAuth2User {

    private final UserEntity user;
    private Map<String, Object> attributes;

    public PrincipalDetails(UserEntity user) {
        this.user = user;
    }

    public PrincipalDetails(UserEntity user, Map<String, Object> attributes) {
        this.user = user;
        this.attributes = attributes;
    }

    //UserDetails
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
    	String type = user.getType();
    	ArrayList<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
		switch (type) {
		case "1": {
			auth.add(new SimpleGrantedAuthority("ROLE_USER"));
			break;
		}
		case "2": {
			auth.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
			break;
		}
		default:

		}
		return auth;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    //OAuth2User
    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getName() {
        return user.getName();
    }

	public UserEntity getUser() {
		return user;
	}

	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}
    
    
}