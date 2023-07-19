package com.Buffers.payloads;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.ManyToOne;

import com.Buffers.Entities.Category;
import com.Buffers.Entities.Comment;
import com.Buffers.Entities.User;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
public class PostDto {
	
	private Integer postId;
	private String title;
	
	
	private String content;
	private String imageName;
	private Date addedDate;
	
	private CategoryDto category;
	 	
	private UserDto user;
	private Set <CommentDto> comments=new HashSet<>();

}
