package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findUserByEmail(String email);
    User findUserByEmailAndStatus(String email, boolean status);

    List<User> findAllByStatusTrueAndRole_IdRole(Long id);
   
    boolean existsByEmail(String email);
}
