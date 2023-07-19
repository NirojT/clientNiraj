package Legit.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Jpa21Utils;
import org.springframework.stereotype.Repository;

import Legit.entities.User;


public interface UserRepo extends JpaRepository<User, Long>{

	public User findByname(String name);

	
	

}
