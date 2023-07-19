package angularBoot.reposioteries;

import org.springframework.data.jpa.repository.JpaRepository;

import angularBoot.entities.Comment;

public interface CommentRepo extends JpaRepository<Comment, Long>{

}
