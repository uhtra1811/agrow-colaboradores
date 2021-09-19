package com.agrow.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Auditoria;

@Repository
public interface AuditoriaRepository extends CrudRepository<Auditoria, Long> {
	    List<Auditoria> findAll();
	}