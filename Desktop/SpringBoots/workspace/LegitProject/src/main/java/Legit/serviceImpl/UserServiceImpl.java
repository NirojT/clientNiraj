package Legit.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import Legit.entities.User;
import Legit.entities.UserRole;
import Legit.helper.UserFoundException;
import Legit.repo.RoleRepo;
import Legit.repo.UserRepo;
import Legit.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	@Autowired
	private BCryptPasswordEncoder bycrypt;;
	
	//creating user 
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception  {
		
		
		User local=this.userRepo.findByname(user.getName());
		
		if(local!=null) {
			System.out.println("User is already exist");
			throw new UserFoundException();
		}else {
			//create user
			for(UserRole ur: userRoles) {
				roleRepo.save(ur.getRole());
				
			}
			user.getUserRole().addAll(userRoles);
			local = this.userRepo.save(user);
			
		}
		
		return local;
	}

	//getting user by name
	@Override
	public User getUser(String name) {
		return	this.userRepo.findByname(name);
		 
	}
 //deleting user
	@Override
	public void deleteUser(Long uid) {
       this.userRepo.deleteById(uid);	
	}

	//updating user
	@Override
	public User updateUser(User user, Long uid) {
		User iduser = this.userRepo.findById(uid).get();
		iduser.setName(user.getName());
		iduser.setPassword(user.getPassword());
		iduser.setProfile(user.getProfile());
		return	this.userRepo.save(iduser);
		 
	}

	@Override
	public List<User> getAllUser() {
		List<User> allUserList = this.userRepo.findAll();
		return allUserList;
	}

}
