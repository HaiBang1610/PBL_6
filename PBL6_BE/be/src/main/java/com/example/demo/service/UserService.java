package com.example.demo.service;

import com.example.demo.dto.UserInfoDTO;
import com.example.demo.model.User;
import java.util.List;

public interface UserService {
	List<UserInfoDTO> findAll();

	User findById(Long id);

	void save(User user);

	List<User> findAllByStatusTrueAndRole_IdRole(Long id);

	
}
