package Legit.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Legit.config.JwtUtill;
import Legit.entities.JwtRequest;
import Legit.entities.JwtResponse;
import Legit.entities.User;
import Legit.serviceImpl.UserDetailServiceImpl;

@RestController
@CrossOrigin
public class AuthenticateController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserDetailServiceImpl userDetailServiceImpl;

	@Autowired
	private JwtUtill jwtUtill;

	// generate token

	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {

		try {
			authenticate(jwtRequest.getName(), jwtRequest.getPassword());

		} catch (UsernameNotFoundException e) {
			throw new Exception("User not found");
		}

		// authenticate
		UserDetails userDetails = this.userDetailServiceImpl.loadUserByUsername(jwtRequest.getName());

		String token = this.jwtUtill.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));

	}

	private void authenticate(String name, String password) throws Exception {

		try {

			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(name, password));

		} catch (DisabledException e) {

			throw new Exception("user disabled " + e.getMessage());

		} catch (BadCredentialsException e) {

			throw new Exception("Invalid credential" + e.getMessage());

		}
	}

	// returns the detail of current user
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return (User) this.userDetailServiceImpl.loadUserByUsername(principal.getName());
	}

}
