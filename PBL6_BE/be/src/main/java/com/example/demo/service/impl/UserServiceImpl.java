package com.example.demo.service.impl;

import com.example.demo.dto.UserInfoDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;

	@Override
	public List<UserInfoDTO> findAll() {

		return userRepository.findAll().stream().map(ele -> this.toUserInfoDTO(ele)).collect(Collectors.toList());
	}

	private UserInfoDTO toUserInfoDTO(User user) {

		UserInfoDTO userInfoDTO = new UserInfoDTO();
		userInfoDTO.setIdUser(user.getIdUser());
		userInfoDTO.setPassword(user.getPassword());
		userInfoDTO.setFullName(user.getFullName());
		userInfoDTO.setEmail(user.getEmail());
		userInfoDTO.setAddress(user.getAddress());
		userInfoDTO.setPhoneNumber(user.getPhoneNumber());
		userInfoDTO.setImage(user.getImage());
		userInfoDTO.setStatus(user.getStatus());
		userInfoDTO.setRole(user.getRole().getRoleName());
		
		return userInfoDTO;
	}


	@Override
	public User findById(Long id) {
		return userRepository.findById(id).orElse(null);
	}

	@Override
	public void save(User user) {
		userRepository.save(user);
	}

	@Override
	public List<User> findAllByStatusTrueAndRole_IdRole(Long id) {
		return userRepository.findAllByStatusTrueAndRole_IdRole(id);
	}

	
}
