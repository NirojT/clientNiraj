package angularBoot.service;

import java.util.List;

import angularBoot.entities.Post;

public interface PostService {
	
	//create post
	Post createPost(Post post, Long uid);
	
	
	//update post
	
	Post updatePost(Post post, Long pid);
	
	//get all post
	
	List<Post> getAllPost();
	
	//get post by id
	Post getPostById(Long pid);
	
	
	//delete post
	
	void deletePost(Long pid);

}
