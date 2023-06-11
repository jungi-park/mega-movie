package com.example.demo.entity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@DynamicInsert
@DynamicUpdate
@Entity(name = "users")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false)
	private int id;

	@Column(nullable = false, columnDefinition = "TINYINT(1) DEFAULT 1")
	private boolean active;

	@Column(nullable = false, length = 6)
	private String birthDate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(updatable = false,columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdAt;

	@Column(nullable = false, length = 100)
	private String email;

	@Column(nullable = false, length = 50)
	private String name;

	@Column(nullable = false, length = 150)
	private String password;

	@Column(nullable = false, length = 20)
	private String phoneNumber;
	
	@ColumnDefault(value = "1")
	@Column(nullable = false,length = 1, columnDefinition = "CHAR(1)")
	private String sex;

	public UserEntity() {
		super();
	}

	public UserEntity(int id, boolean active, String birthDate, Date createdAt, String email, String name,
			String password, String phoneNumber, String sex) {
		super();
		this.id = id;
		this.active = active;
		this.birthDate = birthDate;
		this.createdAt = createdAt;
		this.email = email;
		this.name = name;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.sex = sex;
	}

	@PrePersist
	protected void onCreate() {
		createdAt = Timestamp.valueOf(LocalDateTime.now());
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
				+ ", email=" + email + ", name=" + name + ", password=" + password + ", phoneNumber=" + phoneNumber
				+ ", sex=" + sex + "]";
	}

}
