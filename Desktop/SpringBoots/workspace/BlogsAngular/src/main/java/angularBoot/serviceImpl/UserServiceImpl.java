package angularBoot.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import angularBoot.entities.User;
import angularBoot.errorHandler.ResourceNotFoundException;
import angularBoot.reposioteries.UserRepo;
import angularBoot.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	
	@Override//create User
	public User createUser(User user) {
		User savedUser = this.userRepo.save(user);
		
		
		return savedUser;
	}

	//update User
	@Override
	public User updateUser(User user, Long uid) {
		User userId = this.userRepo.findById(uid).orElseThrow(()-> new ResourceNotFoundException("User", "User id", uid));
		userId.setName(user.getName());
		userId.setEmail(user.getEmail());
		userId.setPassword(user.getPassword());
		
		
		User savedUser = this.userRepo.save(userId);
		
		return savedUser;
	}

	//get All User
	@Override
	public List<User> getAllUser() {
		List<User> AllUser = this.userRepo.findAll();
		return AllUser;
	}

	//get by id
	@Override
	public User getById(Long uid) {
		User userbyid = this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("User","User id" ,uid));
		return userbyid;
	}
	
	//delete by user

	@Override
	public void deleteUser(Long uid) {
		User userbyid = this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("User","User id" ,uid));
		this.userRepo.delete(userbyid);
		
	}

}
