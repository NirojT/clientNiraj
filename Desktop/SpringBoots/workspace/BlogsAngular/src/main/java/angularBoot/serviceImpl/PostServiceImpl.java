package angularBoot.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import angularBoot.entities.Post;
import angularBoot.entities.User;
import angularBoot.errorHandler.ResourceNotFoundException;
import angularBoot.reposioteries.PostRepo;
import angularBoot.reposioteries.UserRepo;
import angularBoot.service.PostService;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostRepo postRepo;
	@Autowired
	private UserRepo userRepo;

	//create post user relation show
	public Post createPost(Post post,Long uid) {
		
		User userPost = this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("User", "user id", uid));
		
		post.setImage("default.png");
		post.setDate(new Date());
		post.setUser(userPost);
		
		Post savedpost = this.postRepo.save(post);
		return savedpost;
	}

	@Override
	public Post updatePost(Post post, Long pid) {
		Post postId = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Post", "Post id", pid));
		postId.setTitle(post.getTitle());
		postId.setContent(post.getContent());
		postId.setImage(post.getImage());
		
		Post updatedPost = this.postRepo.save(postId);
		return updatedPost;
	}

	@Override
	public List<Post> getAllPost() {
		
		List<Post> AllPost = this.postRepo.findAll();
		return  AllPost;
	}

	@Override
	public Post getPostById(Long pid) {
		Post getpostid = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Post", "Post id", pid));
		
		
		return getpostid;
	}

	@Override
	public void deletePost(Long pid) {
		Post deletepost = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Post", "Post id", pid));
		
		this.postRepo.delete(deletepost);
		
		
		
	}

}
