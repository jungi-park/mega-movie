package com.example.demo.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.MovieEntity;

public interface MovieService {

	public MovieEntity registMovie( MovieEntity movieInfo);
}
