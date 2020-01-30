package com.devcortes.server.components.repository;

import com.devcortes.server.components.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
