package security3.ser;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import security3.ent.User;
import security3.repo.UserRepo;

@Service	
public class Services {

	//for in memory data
//	public List<User> users=new ArrayList<>();
//
//	public Services() {
//		users.add(new User("Niroj", 22,"nirajtmg222@gmail.com" ,"BIT" ));
//		users.add(new User("Niroj1", 23,"nirajtmg222@gmail.com" ,"BIT" ));
//		users.add(new User("Niroj2", 24,"nirajtmg222@gmail.com" ,"BIT" ));
//	}
//	
//	public List<User> getUsers(){
//		return users;
//	}
	
	
	@Autowired
	private PasswordEncoder passwordEncoder  ;
	
	
	@Autowired
	private UserRepo userRepo;
	
	public List<User> getAllUser(){
		return userRepo.findAll();
	}
	public User createUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}
	
}
