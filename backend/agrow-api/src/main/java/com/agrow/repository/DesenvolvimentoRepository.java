package com.agrow.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Desenvolvimento;

@Repository
public interface DesenvolvimentoRepository extends CrudRepository<Desenvolvimento, Long> {
	    List<Desenvolvimento> findAll();
	}