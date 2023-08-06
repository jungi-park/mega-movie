package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.MovieEntity;
import com.example.demo.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	private MovieRepository movieRepo;

	public MovieServiceImpl() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public MovieServiceImpl(MovieRepository movieRepo) {
		super();
		this.movieRepo = movieRepo;
	}

	@Override
	public MovieEntity registMovie(MovieEntity movieInfo) {
		return movieRepo.save(movieInfo);
	}

}
