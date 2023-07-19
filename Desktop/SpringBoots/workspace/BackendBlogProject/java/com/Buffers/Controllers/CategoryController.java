package com.Buffers.Controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Buffers.Services.CategoryService;
import com.Buffers.payloads.ApiResponse;
import com.Buffers.payloads.CategoryDto;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	
	/*public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto ){
		
		CategoryDto createCategoryDto = categoryService.createCategoryDto(categoryDto);
		return new ResponseEntity<CategoryDto>(createCategoryDto,HttpStatus.CREATED);
		*/
		
	
	//create
	@PostMapping("/")
	public ResponseEntity<CategoryDto> createCategory(@Valid @RequestBody CategoryDto categoryDto ){
		CategoryDto createdCategoryDto = this.categoryService.createCategoryDto(categoryDto);
		
		return new ResponseEntity<CategoryDto>(createdCategoryDto,HttpStatus.CREATED);
		
		
	}
		//update
	@PutMapping("/{catId}")
	public ResponseEntity<CategoryDto> updateCategory(@Valid 	@RequestBody CategoryDto categoryDto, @PathVariable Integer catId ){
		CategoryDto updatedCategoryDto = this.categoryService.updateCategoryDto(categoryDto, catId);
		
		return new ResponseEntity<CategoryDto>(updatedCategoryDto,HttpStatus.OK);
		
	
	
	}
	
	//delete
	@DeleteMapping("/{catId}")
	public ResponseEntity<ApiResponse> deleteCategory( @PathVariable Integer catId ){
		 this.categoryService.deleteCategoryDto(catId);
		
		return new ResponseEntity<ApiResponse>(new ApiResponse("category is deleted succesfully",true),HttpStatus.OK);
		
	}
	//get by id
	
	@GetMapping("/{catId}")
	public ResponseEntity<CategoryDto> getByIdCategory(@PathVariable Integer catId){
		CategoryDto categoryDtoById = this.categoryService.getCategoryDtoById(catId);
	return new ResponseEntity<CategoryDto>(categoryDtoById,HttpStatus.OK);
	}
	
	//get all
	@GetMapping("/")
	public ResponseEntity<List<CategoryDto>> getAllCategory(){
		List<CategoryDto> categories = this.categoryService.getCategories();
		
		return new ResponseEntity<List<CategoryDto>>(categories,HttpStatus.OK);
	}
	
	
	
	
}
