package security3.cont;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import security3.ent.User;
import security3.ser.Services;

@RequestMapping("home/user/")
@RestController
public class Controlleer {

	@Autowired
	private Services services;
	
	//in memory
//	@GetMapping("get")
//	public List<User> getUser() {
//		List<User> users = this.services.getUsers();
//		
//		return users;
//	}
	@GetMapping("current-user")
	public String getUserLoggedIn(Principal principal) {
		return principal.getName();
	}
}
