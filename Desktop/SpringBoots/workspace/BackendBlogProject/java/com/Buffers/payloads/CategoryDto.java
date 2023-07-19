package com.Buffers.payloads;

import javax.persistence.Column;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
public class CategoryDto {

	
private Integer categoryId;
	
	@NotBlank
	@Size(min=4, message = "minimum size is 4")
	private String categoryTitle;
	@Size(max=10)
	private String categoryDescription;
}
