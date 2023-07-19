package angularBoot.service;

import java.util.List;

import angularBoot.entities.Comment;

public interface CommentService {

	//creating comment by user and post
	Comment createComment(Comment comment, Long uid, Long pid);
	
	//updating
	Comment updateComment(Comment comment,Long cid);
	
	//delete 
	void deleteComment(Long cid); 
	
	//get all comment
	List<Comment> getComment();
}
