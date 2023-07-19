package Legit.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Legit.entities.UserRole;
import Legit.service.User_RoleService;

@RestController
@CrossOrigin
@RequestMapping("/roles")
public class User_RoleController {
	@Autowired
	private User_RoleService roleService;
	
	
	// for user rolessss
	@GetMapping("/get")
	public ResponseEntity<?> getAllUserRoles() {
		
		List<UserRole> roleList = this.roleService.getRoleList();
		
		
		return ResponseEntity.status(200).body(roleList);
	}
	
	
	@DeleteMapping("/delete/{rid}")
	public  ResponseEntity<?> deleteRole(@PathVariable Long rid) {
		
		Boolean deleteUserRole = this.roleService.deleteUserRole(rid);
		if(!deleteUserRole) {
		
			HashMap<String, Object> response = new HashMap<>();

			response.put("message", "role delete fail");
			response.put("status", 400);
			return ResponseEntity.status(200).body(response);
		} else {
			HashMap<String, Object> response = new HashMap<>();

			response.put("message", "role deleted successfully");
			response.put("status", 200);

			return ResponseEntity.status(200).body(response);
		}
	}
	
	
	
	
	
	
	
	
	
	
	

}

