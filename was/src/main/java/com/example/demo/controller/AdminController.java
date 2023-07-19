package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.MovieEntity;
import com.example.demo.service.MovieService;


@RestController
@RequestMapping("/v1")
public class AdminController {
	@Autowired
	private MovieService movieService;

	@GetMapping("admin")
	public String testAdmin() {
		return "성공";
	}
	
	@PostMapping("admin/movie")
	public MovieEntity registMovie(@RequestBody MovieEntity movieInfo) {
		return movieService.registMovie(movieInfo);
	}
	
	
}
