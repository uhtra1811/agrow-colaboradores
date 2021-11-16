package com.agrow.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrow.model.Cliente;
import com.agrow.model.LogAtualizacao;
import com.agrow.model.Relatorio;
import com.agrow.model.RelatorioERP;

import com.agrow.repository.RelatorioRepository;
import com.agrow.repository.LogAtualizacaoRepository;
import com.agrow.repository.RelatorioERPRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RelatorioController {
	
    @Autowired
    public RelatorioRepository relatorioRepository;
    
    @Autowired
    public RelatorioERPRepository relatorioERPRepository;
    
    @Autowired
    public LogAtualizacaoRepository logAtualizacaoRepository;

    
    @GetMapping("/relatorio-erp")
    public List<RelatorioERP> getRelatorioERP() {
        return relatorioERPRepository.findAll();
    }
    
	@PostMapping("/edita-relatorio")
	public  Relatorio editRelatorio(@RequestBody @Valid Relatorio relatorio) {
		return relatorioRepository.save(relatorio);
	}
	
	  @GetMapping("/log-atualizacao")
	    public List<LogAtualizacao> getLog() {
	        return logAtualizacaoRepository.findAll();
	    }
	    
		@PostMapping("/add-log")
		public  LogAtualizacao addLog (@RequestBody @Valid LogAtualizacao logAtualizacao) {
			return logAtualizacaoRepository.save(logAtualizacao);
		}
	 

}
