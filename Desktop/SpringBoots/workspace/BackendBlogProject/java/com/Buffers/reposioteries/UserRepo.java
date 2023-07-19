package com.Buffers.reposioteries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Buffers.Entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
