package Legit.repo;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import Legit.entities.Role;
import Legit.entities.UserRole;

public interface RoleRepo extends JpaRepository<Role, Long> {



}
