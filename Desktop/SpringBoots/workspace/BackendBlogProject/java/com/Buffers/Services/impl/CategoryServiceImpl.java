package com.Buffers.Services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Buffers.Entities.Category;
import com.Buffers.Exception.ResourceNotFoundException;
import com.Buffers.Services.CategoryService;
import com.Buffers.payloads.CategoryDto;
import com.Buffers.reposioteries.CategoryRepo;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CategoryDto createCategoryDto(CategoryDto categoryDto) {
		
		Category cat = this.modelMapper.map(categoryDto, Category.class);
		Category addedcat = categoryRepo.save(cat);
		
		
		return modelMapper.map(addedcat,CategoryDto.class);
	}

	@Override
	public CategoryDto updateCategoryDto(CategoryDto categoryDto, Integer categoryId) {
		
		Category cat = categoryRepo.findById(categoryId).orElseThrow(()-> new ResourceNotFoundException("Category", "Category Id",categoryId));
		 
		cat.setCategoryTitle(categoryDto.getCategoryTitle());
		cat.setCategoryDescription(categoryDto.getCategoryDescription());
		
		Category updatedcat = categoryRepo.save(cat);
		return modelMapper.map(updatedcat, CategoryDto.class);
		
		
	}

	@Override
	public void deleteCategoryDto(Integer categoryId) {
	Category cat = categoryRepo.findById(categoryId).orElseThrow(()-> new ResourceNotFoundException("Category", "Category Id",categoryId));
		
	categoryRepo.delete(cat);
		
	}

	@Override
	public CategoryDto getCategoryDtoById(Integer categoryId) {
		Category cat = categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category", "Category Id", categoryId));
		
		return modelMapper.map(cat, CategoryDto.class);
		
	}

	@Override
	public List<CategoryDto> getCategories() {
		
		List<Category> categories = categoryRepo.findAll();
		List<CategoryDto> catDto = categories.stream().map((cat)->modelMapper.map(cat, CategoryDto.class)).collect(Collectors.toList());
		return catDto;
	}

}
