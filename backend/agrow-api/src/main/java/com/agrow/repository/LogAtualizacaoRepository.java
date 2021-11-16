package com.agrow.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.agrow.model.LogAtualizacao;

@Repository
public interface LogAtualizacaoRepository extends CrudRepository<LogAtualizacao, Long>{
    List<LogAtualizacao> findAll();
}
