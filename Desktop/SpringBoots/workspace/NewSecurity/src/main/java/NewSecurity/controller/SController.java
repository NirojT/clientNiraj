package NewSecurity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class SController {
	
	@PreAuthorize("hasRole('NORMAL')")
	@GetMapping("/normal")
	public ResponseEntity<String> normalUser(){
		
		return ResponseEntity.ok("hI iam normal user");
	}
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/admin")
	public ResponseEntity<String> adminUser(){
		
		return ResponseEntity.ok("hI iam admin user");
	}
	
	@GetMapping("/public")
	public ResponseEntity<String> publicUser(){
		
		return ResponseEntity.ok("hI iam public user");
	}

}
