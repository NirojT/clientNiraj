package angularBoot.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import angularBoot.entities.Comment;
import angularBoot.entities.Post;
import angularBoot.entities.User;
import angularBoot.errorHandler.ApiResponse;
import angularBoot.errorHandler.ResourceNotFoundException;
import angularBoot.reposioteries.CommentRepo;
import angularBoot.reposioteries.PostRepo;
import angularBoot.reposioteries.UserRepo;
import angularBoot.service.CommentService;

@Service
public class CommetServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepo commentRepo;
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private PostRepo postRepo;

	@Override
	public Comment createComment(Comment comment, Long uid, Long pid) {
		User userComment = this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("User", "user id", uid));
		
		Post postComment = this.postRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Post", "post id", pid));
		
		comment.setPost(postComment);
		comment.setUser(userComment);
		
		Comment savedcommet = this.commentRepo.save(comment);
		
		return savedcommet;
	}

	@Override
	public Comment updateComment(Comment comment, Long cid) {
		Comment comentid = this.commentRepo.findById(cid).orElseThrow(()->new ResourceNotFoundException("Comment", "comment id", cid));
		comentid.setContent(comment.getContent());
		
		Comment updatedComment = this.commentRepo.save(comentid);
		return updatedComment;
	}

	@Override
	public void deleteComment(Long cid) {
		Comment commentdelete = this.commentRepo.findById(cid).orElseThrow(()->new ResourceNotFoundException("comment", "comment id", cid));
		
		this.commentRepo.delete(commentdelete);
		
		
	}
	
	public List<Comment> getComment() {
		
		List<Comment> AllComment = this.commentRepo.findAll();
		
		return AllComment;
	}
	
	
	

}
