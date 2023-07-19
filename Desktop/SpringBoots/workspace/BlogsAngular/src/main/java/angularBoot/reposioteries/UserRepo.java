package angularBoot.reposioteries;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import angularBoot.entities.User;

public interface UserRepo extends JpaRepository<User, Long>{

	Optional<User> findByUserName(String username);

}
