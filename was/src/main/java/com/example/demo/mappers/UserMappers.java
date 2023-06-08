package com.example.demo.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.User;

@Mapper
public interface UserMappers {
	List<User> getUserList();
}
