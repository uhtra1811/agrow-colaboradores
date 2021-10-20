package com.agrow.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.DesenvolvimentoRelatorio;

@Repository
public interface DesenvolvimentoRelatorioRepository extends CrudRepository<DesenvolvimentoRelatorio, Long> {
	    List<DesenvolvimentoRelatorio> findAll();
	}