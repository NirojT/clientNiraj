package com.Buffers.Entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



@Data
@Entity
@Table(name="Posts")
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int postId;
	
	@Column(length = 60,nullable = false)
	private String title;
	
	@Column(length = 1000)
	private String content;
	private String imageName;
	private Date addedDate;
	@ManyToOne
	private Category category;
	@ManyToOne	
	private User user;
	
	
	@OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
	private Set <Comment> comments=new HashSet<>();
	

}
