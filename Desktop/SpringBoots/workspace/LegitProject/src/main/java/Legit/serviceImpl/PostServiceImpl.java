package Legit.serviceImpl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Legit.Dto.PostDto;
import Legit.ExceptionHandler.ResourceNotFound;
import Legit.entities.Post;
import Legit.entities.User;
import Legit.repo.PostRepo;
import Legit.repo.UserRepo;
import Legit.service.PostService;


@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	public PostRepo postRepo;
	@Autowired
	public UserRepo userRepo;

	//creating post
	@Override
	public Boolean createPost(PostDto postdto, Long uid) {
		
		
		String imageName = postdto.getImage().getOriginalFilename();
		
		// Save the file to the server file system
		String uploadDirectory = System.getProperty("user.dir") + "/src/main/resources/static";
		Path uploadPath = Paths.get(uploadDirectory);
		
		
		try {
			if (!Files.exists(uploadPath)) {
				Files.createDirectories(uploadPath);
				System.out.println("inside try");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			Path imagePath = uploadPath.resolve(imageName);
			Files.copy(postdto.getImage().getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);
			postdto.getImage().getInputStream().close(); // close the input stream
			// Save the post in the database
		
		
		User user = this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFound("user"," user id", uid));
		Post post=new Post();
		post.setDate(new Date());
		post.setImage("http://localhost:9191/" + imageName);
		post.setUser(user);
		post.setTitle(postdto.getTitle());
		post.setContent(postdto.getContent());
		Post savedpost = this.postRepo.save(post);

		if (savedpost instanceof Post) {
			return true;
		}
		return false;
		
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public Post updatePost(Post post, Long pid) {
		
		Post posts = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFound("post"," post id", pid));
		
		posts.setImage(post.getImage());
		posts.setContent(post.getContent());
		posts.setTitle(post.getTitle());
		
		Post savedpost = this.postRepo.save(posts);
		return savedpost;
	}

	@Override
	public void deletePost(Long pid) {
		Post post = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFound("post"," post id", pid));
		this.postRepo.delete(post);
		
	}
	


	@Override
	public List<Post> getAllPost() {
		List<Post> allposts = this.postRepo.findAll();
		return allposts;
	}
	//get post by id
	@Override
	public Boolean getById(Long pid) {
		Post post = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFound("post"," post id", pid));
		
		
		return true;
	}

	@Override
	public List<Post> getPostByUser(Long uid) {
		User user = this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFound("user"," user id", uid));
		
		List<Post> findByUser = this.postRepo.findByUser(user);
		
		return findByUser;
	}
	
}
