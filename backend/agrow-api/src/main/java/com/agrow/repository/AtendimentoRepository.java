package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Atendimento;


@Repository
public interface AtendimentoRepository extends CrudRepository<Atendimento, Long> {
	    List<Atendimento> findAll();
	}

