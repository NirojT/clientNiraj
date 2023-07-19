package Legit.service;

import java.util.List;
import java.util.Set;

import Legit.entities.User;
import Legit.entities.UserRole;



public interface UserService {

	
	//create user
		User createUser(User user,Set<UserRole> userRoles) throws Exception  ;
		
		
		//get user by user name
		User getUser(String name);
		
		//get all user
		
		 List<User> getAllUser();
		
		
		
		//delete user by id
		void deleteUser(Long uid);
		
		
		//update user
		User updateUser(User user, Long uid);
		
		
		
		
	/*	//update user
		
		User updateUser(User uid, Long user);
		
		
		//get all user
		
		 List<User> getAllUser();
		
		
		//getById
		User getById(Long uid);
		
		
		//delete user
		
		void deleteUser(Long uid);
		

*/
}