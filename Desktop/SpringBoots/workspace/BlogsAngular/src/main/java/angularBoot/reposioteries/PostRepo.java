package angularBoot.reposioteries;

import org.springframework.data.jpa.repository.JpaRepository;

import angularBoot.entities.Post;

public interface PostRepo extends JpaRepository<Post, Long> {

}
