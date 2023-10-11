package com.ashish.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashish.backend.entity.User;

public interface UserRepo extends JpaRepository<User,Long> {

}
