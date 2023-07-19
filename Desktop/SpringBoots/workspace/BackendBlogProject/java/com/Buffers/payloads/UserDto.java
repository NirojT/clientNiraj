package com.Buffers.payloads;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
public class UserDto {

	private int id;

	@NotEmpty
	@Size(min=4, message="name must be minimum four characters")
	private String name;

	@Email(message = "email is not valid")
	private String email;
	
	@Size(min = 3,max = 10,message = "password must be minuium 3 and maximum of 10 characters")
	@NotEmpty
	private String password;
	@NotEmpty
	private String about;

}
