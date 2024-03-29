package com.example.demo.entity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Map;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@DynamicUpdate
@DynamicInsert
@Entity(name = "users")
public class UserEntity implements UserDetails,OAuth2User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false, columnDefinition = "INT UNSIGNED")
	private int id;

	@Column(nullable = false, columnDefinition = "TINYINT(1) DEFAULT 1")
	private boolean active = true;

	@Column(length = 6)
	private String birthDate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdAt;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = true, columnDefinition = "TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP")
	private Date updatedAt;

	@Column(unique = true, nullable = false, length = 100)
	private String email;

	@Column(nullable = false, length = 50)
	private String name;

	@ColumnDefault(value = "1")
	@Column(length = 1, columnDefinition = "CHAR(1)")
	private String type;

	@Column(nullable = false, length = 150)
	private String password;

	@Column(length = 20)
	private String phoneNumber;

	@ColumnDefault(value = "1")
	@Column(length = 1, columnDefinition = "CHAR(1)")
	private String sex;

	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserEntity(int id, boolean active, String birthDate, Date createdAt, Date updatedAt, String email,
			String name, String type, String password, String phoneNumber, String sex) {
		super();
		this.id = id;
		this.active = active;
		this.birthDate = birthDate;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.email = email;
		this.name = name;
		this.type = type;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.sex = sex;
	}

	@PrePersist
	protected void onCreate() {
		createdAt = Timestamp.valueOf(LocalDateTime.now());
	}

	@PreUpdate
	protected void onUpdate() {
		updatedAt = Timestamp.valueOf(LocalDateTime.now());
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", active=" + active + ", birthDate=" + birthDate + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + ", email=" + email + ", name=" + name + ", type=" + type + ", password="
				+ password + ", phoneNumber=" + phoneNumber + ", sex=" + sex + "]";
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		ArrayList<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
		switch (this.type) {
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
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public Map<String, Object> getAttributes() {
		// TODO Auto-generated method stub
		return null;
	}

}
