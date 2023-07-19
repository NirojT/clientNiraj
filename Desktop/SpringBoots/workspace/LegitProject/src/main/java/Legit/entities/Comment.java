package Legit.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.transaction.Transactional;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter 
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Transactional
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cid;
	
	private String content;
	
	
	 @ManyToOne // many comment belongs to one user
     private User user;
	 
	  @ManyToOne
	  @JsonBackReference
	  @JsonIgnore
	  private Post post;
}
