package com.Buffers;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendBlogProjectApplication {
	private static final long serialVersionUID = 1L;

	public static void main(String[] args) {
		SpringApplication.run(BackendBlogProjectApplication.class, args);
	}
	
	
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

}
