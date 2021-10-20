package com.agrow.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.MigracaoRelatorio;

@Repository
public interface MigracaoRelatorioRepository extends CrudRepository<MigracaoRelatorio, Long> {
	    List<MigracaoRelatorio> findAll();
	}