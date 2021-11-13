package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.agrow.model.RelatorioERP;

@Repository
public interface RelatorioERPRepository extends CrudRepository<RelatorioERP, Long>{
    List<RelatorioERP> findAll();
}
