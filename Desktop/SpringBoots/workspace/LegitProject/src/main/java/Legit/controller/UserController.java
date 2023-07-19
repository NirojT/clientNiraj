package Legit.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Legit.entities.Role;
import Legit.entities.User;
import Legit.entities.UserRole;
import Legit.helper.UserFoundException;
import Legit.service.UserService;
import Legit.service.User_RoleService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/create")
	public User createUser(@RequestBody User user) throws Exception {
		System.out.println("inside cretae");
		
		user.setProfile("default.png");
		//encoding password with bycrptpasswordencoder
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		Set<UserRole> userRole=new HashSet<>(); 
		
		Role role = new Role();
		
		role.setRoleId(10L);
		role.setRoleName("Normal");
		
		
		UserRole userRole2 = new UserRole();
		userRole2.setUser(user);
		userRole2.setRole(role);
		
		userRole.add(userRole2);
		
		
		
		return this.userService.createUser(user, userRole);
	}
	
	
	@GetMapping("/get/{name}")
	public User getUser(@PathVariable String name) {
		
		return this.userService.getUser(name);
	}
	
	@GetMapping("/get-all")
	public ResponseEntity<?> getAllUser() {
		
		List<User> allListUser = this.userService.getAllUser();
		
			
			return ResponseEntity.status(200).body(allListUser);
	}

	
	//delete the user by id
	
	@DeleteMapping("/delete/{uid}")
	public void deleteUser(@PathVariable Long uid) {
		
		
		
		this.userService.deleteUser(uid);
	}
	
	//update user
		@PutMapping("/update/{uid}")
		public User updateUser(@RequestBody User user,@PathVariable Long uid) {
			return this.userService.updateUser(user, uid);
			
		}
		@ExceptionHandler(UserFoundException.class)
		public ResponseEntity<?> exceptionHandler(UserFoundException ex){
			
			return new ResponseEntity<Object>(ex.getMessage(),HttpStatus.CONFLICT);
		}
	
	
}
