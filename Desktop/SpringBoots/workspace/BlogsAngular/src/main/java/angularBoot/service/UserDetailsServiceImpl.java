package angularBoot.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import angularBoot.entities.User;
import angularBoot.reposioteries.UserRepo;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = this.userRepo.findByUserName(username).orElseThrow(()->new UsernameNotFoundException("no user found"+username));
		
return new org.springframework.security.core.userdetails.User(user.getName(),user.getPassword()
				,getAuthorities("ROLE_USER"));
				

	}

	private Collection<? extends GrantedAuthority> getAuthorities(String role_user) {
		// TODO Auto-generated method stub
		return Collections.singletonList(new SimpleGrantedAuthority(role_user));
	}
	

}
