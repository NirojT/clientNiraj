package Legit.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Legit.Dto.PostDto;
import Legit.entities.Post;
import Legit.repo.PostRepo;
import Legit.service.PostService;
import Legit.service.UserService;


@RestController
@RequestMapping("/post")
@CrossOrigin
public class PostController {
	
	@Autowired
	public PostService postService;
	@Autowired
	public UserService userService;
	
	
	
	
	@PostMapping("/create/{uid}")
	public ResponseEntity<?> createPost(@ModelAttribute PostDto postdto,@PathVariable Long uid){
		try {
			
			if (postdto.getImage() == null) {
			      throw new IllegalArgumentException("File cannot be null");
			    }
			
		 Boolean createPost = this.postService.createPost(postdto, uid);
		
		
		 if (createPost) {
				HashMap<String, Object> response = new HashMap<>();
				response.put("message", "post created successfully");
				response.put("status", 200);
				return ResponseEntity.status(200).body(response);
			}
			// else
			HashMap<String, Object> response = new HashMap<>();
			response.put("message", "post didnot created");
			response.put("status", 400);
			return ResponseEntity.status(200).body(response);

		}catch (Exception e) {
			e.printStackTrace();
			HashMap<String, Object> response = new HashMap<>();
			response.put("message", "post didnot created");
			response.put("status", 400);
			return ResponseEntity.status(200).body(response);
			// TODO: handle exception
		}	
		
		
	}
	
	@PutMapping("/update/{pid}")
public ResponseEntity<Post> update(@RequestBody Post post,@PathVariable Long pid){
		
		Post updatedpost = this.postService.updatePost(post, pid);
		
		
		return new ResponseEntity<Post>(updatedpost,HttpStatus.OK);
		
}
	
@DeleteMapping("/delete/{pid}")
public void deletePost(@PathVariable Long pid){
	
	 this.postService.deletePost(pid);
	
	
	
	
}

@GetMapping("/all")
		
public ResponseEntity<List<Post>>getAll(){
	
	 List<Post> allPost = this.postService.getAllPost();
	
	
	return new ResponseEntity<List<Post>>(allPost,HttpStatus.OK);
	
}
//post belonging to only that user who posted it
@GetMapping("/user/{uid}")
public ResponseEntity<List<Post>> postByuser(@PathVariable Long uid){
	
	 List<Post> postByUser = this.postService.getPostByUser(uid);
	
	
	return new ResponseEntity<List<Post>>(postByUser,HttpStatus.OK);
	
}
//get post by id
@GetMapping("/get/{uid}")
public ResponseEntity<?> getpostById(@PathVariable Long uid){
	
	  Boolean getId = this.postService.getById(uid);
	
	
	return  ResponseEntity.status(200).body(getId);
	
}




}
