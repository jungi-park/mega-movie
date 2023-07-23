package com.example.demo.entity;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@DynamicUpdate
@DynamicInsert
@Entity(name = "event")
public class EventEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false, columnDefinition = "INT UNSIGNED")
	private int eventId;

	@Column(nullable = false, length = 100)
	private String title;
	
	@Column(nullable = false, length = 150)
	private String content;

	public EventEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EventEntity(int eventId, String title, String content) {
		super();
		this.eventId = eventId;
		this.title = title;
		this.content = content;
	}

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "EventEntity [eventId=" + eventId + ", title=" + title + ", content=" + content + "]";
	}
	
	

}
