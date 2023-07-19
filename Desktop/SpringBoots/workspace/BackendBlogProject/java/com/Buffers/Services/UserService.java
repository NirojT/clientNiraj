package com.Buffers.Services;

import java.util.List;

import com.Buffers.payloads.UserDto;

public interface UserService {
	
	public UserDto createUser(UserDto userDto);
	
	public UserDto updateUser(UserDto userDto,Integer userId);
	
	public UserDto getUserById(Integer userId);
	public List<UserDto> getAllUsers();
	
	public void deleteUser(Integer userId);

}
