package com.Buffers.Controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;


import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Buffers.Entities.Post;
import com.Buffers.Services.FileService;
import com.Buffers.Services.PostService;
import com.Buffers.config.AppConstant;
import com.Buffers.payloads.ApiResponse;
import com.Buffers.payloads.ImageResponse;
import com.Buffers.payloads.PostDto;
import com.Buffers.payloads.PostResponse;
import com.Buffers.config.*;

@RestController
@RequestMapping("/api/")
public class PostController {
	@Autowired
	private FileService fileService;
	
	@Value("{project.image}")
	private String path;
	@Autowired
	private PostService postService;
	
	@PostMapping("/user/{userId}/category/{categoryId}/posts")
	public ResponseEntity<PostDto> createPost(@RequestBody  PostDto postDto,@PathVariable Integer userId,@PathVariable Integer categoryId){
		PostDto createdPost = this.postService.createPost(postDto, userId,categoryId);
		
		return new ResponseEntity<PostDto>(createdPost,HttpStatus.CREATED);
		
	}
	//get by user
	@GetMapping("/user/{userId}/posts")
	public ResponseEntity<List<PostDto>> getPostByUser(@PathVariable Integer userId){
		
		List<PostDto> postDtos = this.postService.getPostByUser(userId);
		
		return new ResponseEntity<List<PostDto>>(postDtos,HttpStatus.OK);
	}
	
	//get by category
	@GetMapping("/category/{categoryId}/posts")
	public ResponseEntity<List<PostDto>> getPostByCategory(@PathVariable("categoryId") Integer categorysId){
		
		List<PostDto> postDtos = this.postService.getPostByCategory(categorysId);
		
		return new ResponseEntity<List<PostDto>>(postDtos,HttpStatus.OK);
		
	}
	
	@GetMapping("/posts")
	public ResponseEntity <PostResponse> getAllPost(
			@RequestParam(value="pageNumber",defaultValue=AppConstant.Page_Number,required = false) Integer pageNumber,
			@RequestParam(value="pageSize",defaultValue = AppConstant.Page_Size,required = false)	Integer pageSize,
			@RequestParam(value="sortBy",defaultValue = AppConstant.Sort_By,required = false) String sortBy,
			@RequestParam(value="sortDir",defaultValue=AppConstant.Sort_Dir,required = false) String sortDir
			){
		
		
		
		  PostResponse postResponse = this.postService.postDtos(pageNumber, pageSize, sortBy, sortDir);
		return new ResponseEntity<PostResponse>(postResponse,HttpStatus.OK);
	}
	//get by id
	
	@GetMapping("/posts/{postId}")
	public ResponseEntity<PostDto> getById(@PathVariable Integer postId){
		
		PostDto postDtoById = this.postService.getPostDtoById(postId);
		return new  ResponseEntity<PostDto>(postDtoById,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/posts/{postId}")
	
	public ApiResponse deletePost(@PathVariable Integer postId) {
		this.postService.deletePost(postId);
	return	new ApiResponse("post is succcessfully deleted",true);
		
	}
	@PutMapping("/posts/{postId}")
	public ResponseEntity<PostDto> updatePost(@PathVariable Integer postId,@RequestBody PostDto dto) {
		PostDto updatePost = this.postService.updatePost(dto, postId);
		return	new ResponseEntity<PostDto>(updatePost,HttpStatus.OK);
		//
		
		
	}
	
	@GetMapping("/posts/search/{keywords}")
	public ResponseEntity<List<PostDto>> searchPostByTitle(@PathVariable String keywords){
		
		List<PostDto> searchPosts = this.postService.searchPosts(keywords);
		
		return new ResponseEntity<List<PostDto>>(searchPosts,HttpStatus.OK);
		// is the 
		
	}
	//post image
	@PostMapping("/post/image/upload/{postId}")
	public ResponseEntity<PostDto> uploadImage(
			@RequestParam("image") MultipartFile image,@PathVariable Integer postId) throws IOException{
		
		PostDto postDto = this.postService.getPostDtoById(postId);
		String fileName = this.fileService.uploadImage(path, image);

		postDto.setImageName(fileName);
		PostDto updatedPost = this.postService.updatePost(postDto, postId);
		
		
		return new ResponseEntity<PostDto>(updatedPost,HttpStatus.OK);
		
	}
	//method to serve file
	@GetMapping(value="/post/image/{imageName}",produces =org.springframework.http.MediaType.IMAGE_JPEG_VALUE)
	
	public void downloadImage(
			@PathVariable("imageName") String imageName,
			HttpServletResponse response
			)throws IOException {
		InputStream resource = this.fileService.getResource(path, imageName);
		response.setContentType(org.springframework.http.MediaType.IMAGE_JPEG_VALUE);
		StreamUtils.copy(resource,response.getOutputStream());
	}
	
	

}
