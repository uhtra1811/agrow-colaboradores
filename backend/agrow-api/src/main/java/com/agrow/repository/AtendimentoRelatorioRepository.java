package com.agrow.repository;

import java.util.List;


import javax.validation.Valid;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.AtendimentoRelatorio;


@Repository
public interface AtendimentoRelatorioRepository extends CrudRepository<AtendimentoRelatorio, Long> {
	    List<AtendimentoRelatorio> findAll();

		AtendimentoRelatorio save(@Valid List<AtendimentoRelatorio> atendimentoRelatorio);

		

	}

