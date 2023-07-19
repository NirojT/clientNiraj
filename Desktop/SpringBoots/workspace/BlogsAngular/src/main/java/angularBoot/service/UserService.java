package angularBoot.service;

import java.util.List;

import angularBoot.entities.User;

public interface UserService {
	
	//create user
	User createUser(User user);
	
	
	//update user
	
	User updateUser(User uid, Long user);
	
	
	//get all user
	
	 List<User> getAllUser();
	
	
	//getById
	User getById(Long uid);
	
	
	//delete user
	
	void deleteUser(Long uid);
	
	
	

	
	
	

}
