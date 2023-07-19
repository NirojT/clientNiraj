package com.Buffers.reposioteries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Buffers.Entities.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer> {
	
	

}
