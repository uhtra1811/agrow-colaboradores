package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
	    List<Cliente> findAll();
	}