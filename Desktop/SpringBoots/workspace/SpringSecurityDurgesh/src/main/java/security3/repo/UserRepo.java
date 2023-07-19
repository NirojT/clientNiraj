package security3.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import security3.ent.User;
import java.util.List;
import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Integer>{
	
	Optional<User> findByEmail(String email);

}
