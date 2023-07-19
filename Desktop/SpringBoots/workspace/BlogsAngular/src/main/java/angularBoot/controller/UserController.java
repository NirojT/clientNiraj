package angularBoot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import angularBoot.entities.User;
import angularBoot.errorHandler.ApiResponse;
import angularBoot.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	//create user
	@PostMapping("/create")
	public ResponseEntity<User> createUser(@RequestBody  User user){
		User createdUser = this.userService.createUser(user);
		
		return new ResponseEntity<User>(createdUser,HttpStatus.CREATED);
	
	}
	
	//update user
	@PutMapping("/update/{uid}")
	public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable Long uid){
		
		User updatedUser = this.userService.updateUser(user, uid);
		
		return new ResponseEntity<User>(updatedUser,HttpStatus.OK);
		
	}
	
	//get all user
	
	@GetMapping("/get")
	public ResponseEntity<List<User>> getAllUser(){
		List<User> allUser = this.userService.getAllUser();
		
		return new ResponseEntity<List<User>>(allUser,HttpStatus.OK);
	}
	
	
	//get by id
	@GetMapping("/get/{uid}")
	public  ResponseEntity<User> getById(@PathVariable Long uid) {
		
		User byId = this.userService.getById(uid);
		return new ResponseEntity<User>(byId,HttpStatus.OK); 
		
	}
	
	//delete user
	
	@DeleteMapping("/delete/{uid}")
public  ResponseEntity<ApiResponse> deleteUser(@PathVariable Long uid){
		
		 this.userService.deleteUser(uid);
		
		return new ResponseEntity<ApiResponse>(new ApiResponse("Message Deleted successfully",true),HttpStatus.OK);
		
	}
	
		
	
	
	
	

}
