package com.agrow.controller;

import javax.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrow.model.Relatorio;

import com.agrow.repository.RelatorioRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RelatorioController {
	
    @Autowired
    public RelatorioRepository relatorioRepository;

    
	@PostMapping("/edita-relatorio")
	public  Relatorio editRelatorio(@RequestBody @Valid Relatorio relatorio) {
		return relatorioRepository.save(relatorio);
	}
}
