package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.agrow.model.Relatorio;

@Repository
public interface RelatorioRepository extends CrudRepository<Relatorio, Long>{
    List<Relatorio> findAll();
}
