package com.Buffers.reposioteries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Buffers.Entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
