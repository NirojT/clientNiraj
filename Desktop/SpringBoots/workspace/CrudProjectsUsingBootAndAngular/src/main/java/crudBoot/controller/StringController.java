package crudBoot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ok")
public class StringController {
	
	@GetMapping("/")
	public String hello() {
		
		
		return "hello";
	}

}
