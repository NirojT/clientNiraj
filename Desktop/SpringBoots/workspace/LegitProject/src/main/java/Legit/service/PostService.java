package Legit.service;

import java.util.List;

import Legit.Dto.PostDto;
import Legit.entities.Post;


public interface PostService {
	
	/*
	 * //creating post Post createPost(Post post, Long uid);
	 */
	//using dto create post
	Boolean createPost(PostDto postdto, Long uid);
	
	
	//editing post
	Post updatePost(Post post,Long pid);
	
	
	//delete post
	void deletePost(Long pid);
	
	
	//get all post
  List<Post> getAllPost();
	
	//getById
	Boolean getById(Long pid);
	
	//get all post by user
	List<Post> getPostByUser(Long uId);



	
	

}
