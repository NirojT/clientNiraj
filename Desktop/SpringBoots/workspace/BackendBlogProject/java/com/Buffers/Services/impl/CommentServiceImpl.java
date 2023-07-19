package com.Buffers.Services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Buffers.Entities.Comment;
import com.Buffers.Entities.Post;
import com.Buffers.Exception.ResourceNotFoundException;
import com.Buffers.Services.CommentService;
import com.Buffers.payloads.CommentDto;
import com.Buffers.reposioteries.CommentRepo;
import com.Buffers.reposioteries.PostRepo;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private PostRepo postRepo;
	@Autowired
	private CommentRepo commentRepo;
	@Autowired
	private ModelMapper modelMapper;

	
	
	@Override
	public CommentDto createComment(CommentDto commentDto, Integer postId) {
		Post post=this.postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("post", "post id",postId));
		Comment comment = this.modelMapper.map(commentDto, Comment.class);
		comment.setPost(post);
		
		Comment saveedComment = this.commentRepo.save(comment);
		return this.modelMapper.map(saveedComment, CommentDto.class);
		 
	}

	@Override
	public void deleteComment(Integer commentId) {
		Comment comment = this.commentRepo.findById(commentId).orElseThrow(()->new ResourceNotFoundException("Comment", "Comment id" ,commentId));
		
		this.commentRepo.delete(comment);

	}

}
