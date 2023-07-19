package com.Buffers.Services;

import java.util.List;

import com.Buffers.Entities.Post;
import com.Buffers.payloads.PostDto;
import com.Buffers.payloads.PostResponse;

public interface PostService {
	
	//create
	PostDto createPost(PostDto postDto, Integer userId,Integer cateogoryId);
	
	//update
	PostDto updatePost(PostDto postDto,Integer postId);
	
	//delete
	void deletePost(Integer postId);
	
	
	//get all
	PostResponse postDtos(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
	
	//get by id
	
	PostDto getPostDtoById(Integer postId);
	
	
	//get all post by category
	
	List<PostDto> getPostByCategory(Integer categoryId);
	
	//get all post by user
	
	List<PostDto> getPostByUser(Integer userId);
	
	
	//search post
	
	

	List<PostDto> searchPosts(String keyword);

}
