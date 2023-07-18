package com.example.demo.entity;

import java.util.Date;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.type.EnumType;

import com.example.demo.type.Genre;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@DynamicUpdate
@DynamicInsert
@Entity(name = "movie")
public class MovieEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false, columnDefinition = "INT UNSIGNED")
	private int movieId;

	@Column(nullable = false, length = 100)
	private String title;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(updatable = false, columnDefinition = "TIMESTAMP")
	private Date releasDate;

	@Enumerated(jakarta.persistence.EnumType.STRING)
	@Column(nullable = false, length = 100)
	private Genre genre;

	public MovieEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MovieEntity(int movieId, String title, Date releasDate, Genre genre) {
		super();
		this.movieId = movieId;
		this.title = title;
		this.releasDate = releasDate;
		this.genre = genre;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getReleasDate() {
		return releasDate;
	}

	public void setReleasDate(Date releasDate) {
		this.releasDate = releasDate;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	@Override
	public String toString() {
		return "MovieEntity [movieId=" + movieId + ", title=" + title + ", releasDate=" + releasDate + ", genre="
				+ genre + "]";
	}

}
