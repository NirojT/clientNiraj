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

import angularBoot.entities.Comment;
import angularBoot.errorHandler.ApiResponse;
import angularBoot.reposioteries.CommentRepo;
import angularBoot.service.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	
	@PostMapping("/create/{pid}/{uid}")
	public ResponseEntity<Comment> createComment(@RequestBody Comment comment,
			@PathVariable Long pid,
			@PathVariable Long uid){
		
		
		Comment createdComment = this.commentService.createComment(comment, uid, pid);
		
		return new ResponseEntity<Comment>(createdComment,HttpStatus.OK);
	
	}
	@GetMapping("/get")
	public ResponseEntity<List<Comment>> getComment(){
		List<Comment> allcoments = this.commentService.getComment();
		
		return new ResponseEntity<List<Comment>>(allcoments,HttpStatus.OK);
		
	}
	
	@PutMapping("update/{cid}")
	public ResponseEntity<Comment> updateComment(@RequestBody Comment comment,@PathVariable Long cid){
		Comment updatedComment = this.commentService.updateComment(comment, cid);
		
		return new ResponseEntity<Comment>(updatedComment,HttpStatus.OK);
		
		
	}
	
	@DeleteMapping("delete/{cid}")
	public ApiResponse deleteComment(@PathVariable Long cid) {
		this.commentService.deleteComment(cid);
		
		return new ApiResponse("Message deleted successfully", true);
	}
	
	
}
