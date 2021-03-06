package com.agrow.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.ClienteRelatorio;

@Repository
public interface ClienteRelatorioRepository extends CrudRepository<ClienteRelatorio, Long> {
	    List<ClienteRelatorio> findAll();
	}