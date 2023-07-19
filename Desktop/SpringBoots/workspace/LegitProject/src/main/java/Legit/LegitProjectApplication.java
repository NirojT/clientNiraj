package Legit;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import Legit.entities.Role;
import Legit.entities.User;
import Legit.entities.UserRole;
import Legit.helper.UserNotFoundException;
import Legit.service.UserService;

@SpringBootApplication
public class LegitProjectApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public static void main(String[] args) {	
		SpringApplication.run(LegitProjectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");

		
		//creating admin
		
		
		  try { User user = new User();
		  
		  user.setName("Niroj"); user.setEmail("nirajtmg222@gmail.com");
		  user.setPassword(this.bCryptPasswordEncoder.encode("tmg"));
		  user.setProfile("default.png");
		  
		  Role role1 = new Role();
		  
		  role1.setRoleId(44L);
		  
		  role1.setRoleName("Admin");
		  
		  Set<UserRole> userRoleSet = new HashSet<>();
		  
		  UserRole userRole = new UserRole();
		  
		  userRole.setRole(role1); userRole.setUser(user); userRoleSet.add(userRole);
		  
		  User user1 = this.userService.createUser(user, userRoleSet);
		  System.out.println(user1.getName());
		  
		  }catch(Exception e) { e.printStackTrace(); } //
		 
	}

}
