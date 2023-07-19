package com.Buffers.Services;

import java.util.List;

import com.Buffers.payloads.CategoryDto;

public interface CategoryService {
	
	//create
	public CategoryDto createCategoryDto(CategoryDto categoryDto);
	//update
	public CategoryDto updateCategoryDto(CategoryDto categoryDto,Integer categotyId);
	
	//delete
	public void deleteCategoryDto(Integer categoryId);
	
	//get by id
	public CategoryDto getCategoryDtoById(Integer categoryId);
	
	//get all
	public List<CategoryDto> getCategories();

}
