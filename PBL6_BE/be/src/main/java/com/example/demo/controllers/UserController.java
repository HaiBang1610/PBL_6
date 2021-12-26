package com.example.demo.controllers;

import com.example.demo.dto.UserInfoDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

//    @Autowired
//    GoodsCartService goodsCartService;

	@Autowired
	UserService userService;

	@Autowired
	BillService billService;

	@Autowired
	GoodsService goodsService;

	@Autowired
	UserRepository userRepository;


	@GetMapping("/getAll")
	public List<UserInfoDTO> getAll() {

		return userService.findAll();
	}

	@PutMapping("/edit/{idUser}")
	public ResponseEntity<Void> editUser(@PathVariable Long idUser, @RequestBody User user) {
		User userNew = userRepository.findById(idUser).get();
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			userNew.setFullName(user.getFullName());
			userNew.setPhoneNumber(user.getPhoneNumber());
			userNew.setAddress(user.getAddress());
			//userNew.setEmail(user.getEmail());
			//userNew.setImage(user.getImage());
			userService.save(userNew);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}

	@GetMapping("/userLock/{id}")
	public ResponseEntity<Void> userLock(@PathVariable("id") Long idUser) {
		User user = userService.findById(idUser);
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		user.setStatus(!user.getStatus());
		userService.save(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}