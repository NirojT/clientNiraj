package angularBoot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import angularBoot.entities.Post;
import angularBoot.errorHandler.ApiResponse;
import angularBoot.service.PostService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	
	@PostMapping("/create/{uid}")
	public ResponseEntity<Post> createPost(@RequestBody Post post,@PathVariable Long uid){
		
		Post createdpost =this.postService.createPost(post, uid);
		
		return new ResponseEntity<Post>(createdpost,HttpStatus.OK);
		
		
		
	}
	@PutMapping("/update")
	public ResponseEntity<Post> updatePost(@RequestBody Post post,@PathVariable Long pid){
		
		Post updatedPost = this.postService.updatePost(post, pid);
		
		return new ResponseEntity<Post>(updatedPost,HttpStatus.OK);
		
		
		
	}
	@GetMapping("/get")
	public ResponseEntity<List<Post>> getPost(){
		
		List<Post> updatedPost = this.postService.getAllPost();
		
		return new ResponseEntity<List<Post>>(updatedPost,HttpStatus.OK);
		
		
		
	}
	@GetMapping("/get/{pid}")
	public ResponseEntity<Post> getPostById(@PathVariable Long pid){
		
		Post getPostId = this.postService.getPostById(pid);
		
		return new ResponseEntity<Post>(getPostId,HttpStatus.OK);
		
		
		
	}
	@DeleteMapping("/delete/{pid}")
	public ApiResponse deletePost(@PathVariable Long pid){
		
		this.postService.deletePost(pid);
		
		return new ApiResponse("Message Deleted successfully", true);
	
	}
	

	

}
