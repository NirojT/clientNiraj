package com.Buffers.Services.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.Buffers.Entities.Category;
import com.Buffers.Entities.Post;
import com.Buffers.Entities.User;
import com.Buffers.Exception.ResourceNotFoundException;
import com.Buffers.Services.PostService;
import com.Buffers.payloads.ApiResponse;
import com.Buffers.payloads.CategoryDto;
import com.Buffers.payloads.PostDto;
import com.Buffers.payloads.PostResponse;
import com.Buffers.reposioteries.CategoryRepo;
import com.Buffers.reposioteries.PostRepo;
import com.Buffers.reposioteries.UserRepo;

@Service
public class PostServiceImpl implements PostService {
	
	
	@Autowired
	private PostRepo postRepo;
	
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private ModelMapper modelMapper;

		public PostDto createPost(PostDto postDto, Integer userId,Integer cateogoryId) {
			
			User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "user Id",userId));
			
			Category category = this.categoryRepo.findById(cateogoryId).orElseThrow(()->new ResourceNotFoundException("Category", "category id",cateogoryId));
			
			Post post = this.modelMapper.map(postDto, Post.class);
			post.setImageName("default.png");
			post.setAddedDate(new Date());
			post.setUser(user);
			post.setCategory(category);
			
			
			Post newPost = this.postRepo.save(post);
			
			
			return this.modelMapper.map(newPost, PostDto.class);
		}

	@Override
	public PostDto updatePost(PostDto postDto, Integer postId) {
	Post posts=	this.postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("PostDto", "postDto Id", postId));
	
	posts.setTitle(postDto.getTitle());
	posts.setContent(postDto.getContent());
	posts.setImageName(postDto.getImageName());
	
	Post udatedpost = this.postRepo.save(posts);
		return modelMapper.map(udatedpost, PostDto.class);
	}

	@Override
	public void deletePost(Integer postId) {
		Post posts = this.postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post", "post Id", postId));
		postRepo.delete(posts);
		
	}

	//get all
	@Override
	public PostResponse postDtos(Integer pageNumber,Integer pageSize,String sortBy,String sortDir) {
		
		
		
		//ternery means alternative of if else
//		Sort sort=(sortDir.equalsIgnoreCase("asc"))?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
		Sort sort=null;
		if(sortDir.equalsIgnoreCase("asc")) {
			
			sort = Sort.by(sortBy).ascending();
		}
		else {
			sort = Sort.by(sortBy).descending();
		}
		
		
		
		Pageable p=PageRequest.of(pageNumber, pageSize, sort);
		Page<Post> pagePost = this.postRepo.findAll(p);
		List<Post> allPosts = pagePost.getContent();
		
		
	
		List<PostDto> postDtos = allPosts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		
		PostResponse postResponse=new PostResponse();
		
		postResponse.setContent(postDtos);
		postResponse.setPageNumber(pagePost.getNumber());
		postResponse.setPageSize(pagePost.getSize());
		
		postResponse.setTotalElements(pagePost.getTotalElements());
		postResponse.setTotalPages(pagePost.getTotalPages());
		postResponse.setLastPage(pagePost.isLast());
		return postResponse;
		
		
	}

	@Override
	public PostDto getPostDtoById(Integer postId) {
		Post posts = this.postRepo.findById(postId).orElseThrow(()-> new ResourceNotFoundException("Post", "postId", postId));
		
	return	this.modelMapper.map(posts, PostDto.class);
		
		
		
		
	}

	@Override
	public List<PostDto> getPostByCategory(Integer categoryId) {
	
		Category cat=this.categoryRepo.findById(categoryId)
				.orElseThrow(()->new ResourceNotFoundException("Category", "category id", categoryId));
		List<Post> posts = this.postRepo.findByCategory(cat);
		List<PostDto> postDtos = posts.stream().map((post)-> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList()); 
		
		return postDtos;
		
		// 
	}

	@Override
	public List<PostDto> getPostByUser(Integer userId) {
	
		User user = this.userRepo.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("User", "User Id",userId));
		List<Post> posts = this.postRepo.findByUser(user);
		
		List<PostDto> postDtos = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		
		return postDtos;
	}
  
	
	@Override
	public List<PostDto> searchPosts(String keyword) {
		
		List<Post> posts = this.postRepo.findByTitleContaining(keyword);
		List<PostDto> postDtos = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());	
		return postDtos;
	}

}
