package com.agrow.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Migracao;

@Repository
public interface MigracaoRepository extends CrudRepository<Migracao, Long> {
	    List<Migracao> findAll();
	}