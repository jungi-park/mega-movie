package com.example.demo.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity(name = "screen")
public class ScreenEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false, columnDefinition = "INT UNSIGNED")
	private int screenId;

	@ManyToOne
	@JoinColumn(name = "MOVIE_ID")
	private MovieEntity movieId;

	@ManyToOne
	@JoinColumn(name = "THEATER_ID")
	private TheaterEntity theaterId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(updatable = false, columnDefinition = "TIMESTAMP")
	private Date screenDate;

	public ScreenEntity() {
		super();
	}

	public ScreenEntity(int screenId, MovieEntity movieId, TheaterEntity theaterId, Date screenDate) {
		super();
		this.screenId = screenId;
		this.movieId = movieId;
		this.theaterId = theaterId;
		this.screenDate = screenDate;
	}

	public int getScreenId() {
		return screenId;
	}

	public void setScreenId(int screenId) {
		this.screenId = screenId;
	}

	public MovieEntity getMovieId() {
		return movieId;
	}

	public void setMovieId(MovieEntity movieId) {
		this.movieId = movieId;
	}

	public TheaterEntity getTheaterId() {
		return theaterId;
	}

	public void setTheaterId(TheaterEntity theaterId) {
		this.theaterId = theaterId;
	}

	public Date getScreenDate() {
		return screenDate;
	}

	public void setScreenDate(Date screenDate) {
		this.screenDate = screenDate;
	}

	@Override
	public String toString() {
		return "ScreenEntity [screenId=" + screenId + ", movieId=" + movieId + ", theaterId=" + theaterId
				+ ", screenDate=" + screenDate + "]";
	}

}
