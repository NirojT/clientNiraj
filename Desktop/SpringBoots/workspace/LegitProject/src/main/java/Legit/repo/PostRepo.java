package Legit.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



import Legit.entities.Post;
import Legit.entities.User;

public interface PostRepo extends JpaRepository<Post, Long> {
	

	List<Post> findByUser( User user);

}
