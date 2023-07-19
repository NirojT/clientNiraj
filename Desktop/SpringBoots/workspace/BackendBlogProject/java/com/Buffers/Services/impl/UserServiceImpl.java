package com.Buffers.Services.impl;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Buffers.Entities.User;
import com.Buffers.Exception.ResourceNotFoundException;
import com.Buffers.Services.UserService;
import com.Buffers.payloads.UserDto;
import com.Buffers.reposioteries.UserRepo;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	
	@Override
	public UserDto createUser(UserDto userDto) {
		
		User user=dtoToUser(userDto);
		
		User savedUser=userRepo.save(user);
		return UserToDto(savedUser);
	}

	
	
	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		
		User user =userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId));
	
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setAbout(userDto.getAbout());
		
		User updatedUser = userRepo.save(user);
		 UserDto userToDto1 = UserToDto(updatedUser);
		 return userToDto1;
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user=userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId));
		
		
		return UserToDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
		
		List<User> users = userRepo.findAll();
		
		List<UserDto> userDtos = users.stream().map(user ->UserToDto(user)).collect(Collectors.toList());
		
		return userDtos;
	}

	@Override
	public void deleteUser(Integer userId) {
	User user = userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId) );
		
	
	userRepo.delete(user);
	}
	
	
	public User dtoToUser(UserDto userDto) {
		
		
		User user=modelMapper.map(userDto, User.class);
		/*
		 * user.setId(userDto.getId()); user.setName(userDto.getName());
		 * user.setEmail(userDto.getEmail()); user.setPassword(userDto.getPassword());
		 * user.setAbout(userDto.getAbout());
		 */
		
		return user;
		
	}
	
	public UserDto UserToDto(User user) {
		
		UserDto userDto=modelMapper.map(user, UserDto.class);
		
		/*
		 * userDto.setId(user.getId()); userDto.setName(user.getName());
		 * userDto.setEmail(user.getEmail()); userDto.setPassword(user.getEmail());
		 * userDto.setAbout(user.getAbout());
		 */ 
		
		return userDto;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}