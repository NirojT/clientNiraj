package Legit.serviceImpl;

import java.nio.file.attribute.UserPrincipalNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import Legit.entities.User;
import Legit.repo.UserRepo;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepo userRepo;
	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException  {
		
		User user = this.userRepo.findByname(name);
		
		if(user==null) {
			System.out.println("user not found");
			throw new UsernameNotFoundException("no user found!!");
		}
		
		
		return user;
	}

}
