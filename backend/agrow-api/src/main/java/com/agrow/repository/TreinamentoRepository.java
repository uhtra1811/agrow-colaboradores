package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Treinamento;

@Repository
public interface TreinamentoRepository extends CrudRepository<Treinamento, Long> {
	    List<Treinamento> findAll();
}