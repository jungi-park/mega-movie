package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.MovieEntity;
import com.example.demo.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {
	
	@Autowired
	private MovieRepository movieRepo;

	@Override
	public MovieEntity registMovie(MovieEntity movieInfo) {
		return movieRepo.save(movieInfo);
	}
	
	

}
