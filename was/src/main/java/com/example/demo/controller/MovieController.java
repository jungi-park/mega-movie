package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.MovieEntity;
import com.example.demo.service.MovieService;

@RestController
@RequestMapping("/v1")
public class MovieController {

	@Autowired
	private MovieService movieService;

	@PostMapping("admin/movie")
	public MovieEntity registMovie(@RequestBody MovieEntity movieInfo) {
		return movieService.registMovie(movieInfo);
	}

}
