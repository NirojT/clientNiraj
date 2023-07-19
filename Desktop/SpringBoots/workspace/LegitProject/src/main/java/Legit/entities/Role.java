package Legit.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.transaction.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Transactional
public class Role{
	
	@Id
	// @GeneratedValue(strategy = GenerationType.AUTO)
	private Long roleId;
	
	private String roleName;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "role")
	@JsonIgnore
	private Set<UserRole> userRoles=new HashSet<>();
}
