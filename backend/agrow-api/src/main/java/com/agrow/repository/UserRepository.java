package com.agrow.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsuario(String usuario);
    List<User> findAll();
    default void deleteById(long id) {
    	// TODO Auto-generated method stub
    	
    }
}

