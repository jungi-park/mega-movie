package com.example.demo.entity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity(name = "reservation")
public class ReservationEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false, columnDefinition = "INT UNSIGNED")
	private int reservationId;

	@ManyToOne
	// @JoinColumn 설정시 name속성은 현재 엔티티에 만들어질 속성이다 참조 필드를 지정할떄는 referencedColumnName
	// 속성을 사용한다. 미지정시 PK값이 설정된다.
	@JoinColumn(name = "USER_ID")
	private UserEntity userId;

	@ManyToOne
	@JoinColumn(name = "SCREEN_ID")
	private ScreenEntity screenId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date reservationDate;

	@PrePersist
	protected void onReservation() {
		reservationDate = Timestamp.valueOf(LocalDateTime.now());
	}

	public ReservationEntity() {
		super();
	}

	public ReservationEntity(int reservationId, UserEntity userId, ScreenEntity screenId, Date reservationDate) {
		super();
		this.reservationId = reservationId;
		this.userId = userId;
		this.screenId = screenId;
		this.reservationDate = reservationDate;
	}

	public int getReservationId() {
		return reservationId;
	}

	public void setReservationId(int reservationId) {
		this.reservationId = reservationId;
	}

	public UserEntity getUserId() {
		return userId;
	}

	public void setUserId(UserEntity userId) {
		this.userId = userId;
	}

	public ScreenEntity getScreenId() {
		return screenId;
	}

	public void setScreenId(ScreenEntity screenId) {
		this.screenId = screenId;
	}

	public Date getReservationDate() {
		return reservationDate;
	}

	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}

	@Override
	public String toString() {
		return "ReservationEntity [reservationId=" + reservationId + ", userId=" + userId + ", screenId=" + screenId
				+ ", reservationDate=" + reservationDate + "]";
	}

}
