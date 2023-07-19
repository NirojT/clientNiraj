package com.Buffers.reposioteries;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Buffers.Entities.Category;
import com.Buffers.Entities.Post;
import com.Buffers.Entities.User;

public interface PostRepo extends JpaRepository<Post, Integer> {
	
	List<Post> findByUser( User user);
	List<Post> findByCategory(Category category);
	
	
	List<Post> findByTitleContaining(String title);
	
}
