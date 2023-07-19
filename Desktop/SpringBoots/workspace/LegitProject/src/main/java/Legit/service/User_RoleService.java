package Legit.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Legit.ExceptionHandler.ResourceNotFound;
import Legit.entities.Role;
import Legit.entities.UserRole;
import Legit.repo.User_RoleRepo;

@Service
public class User_RoleService {

	@Autowired
	private User_RoleRepo roleRepo;




	
	  public Boolean deleteUserRole(Long uid) {
	  
	  UserRole role = this.roleRepo.findById(uid).orElseThrow(() -> new
	  ResourceNotFound("ROle", "Role id", uid));
	  
	  this.roleRepo.delete(role);
	  
	  Optional<UserRole> deletedNotice = this.roleRepo.findById(uid);
	  
	  if (deletedNotice.isPresent()) { return false; }
	  
	  return true;
	  
	  }
	 
	public List<UserRole> getRoleList() {
		List<UserRole> allROles = this.roleRepo.findAll();
		return allROles;
	}

}
