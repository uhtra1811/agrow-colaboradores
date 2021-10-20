package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.TreinamentoRelatorio;

@Repository
public interface TreinamentoRelatorioRepository extends CrudRepository<TreinamentoRelatorio, Long> {
	    List<TreinamentoRelatorio> findAll();
}