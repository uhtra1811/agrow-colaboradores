package com.agrow.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.agrow.model.Treinamento;
import com.agrow.repository.TreinamentoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TreinamentoController {
	
    @Autowired
    public TreinamentoRepository treinamentoRepository;
	 
    
    
    @GetMapping("/treinamentos")
    public List<Treinamento> getTreinamentos() {
        return treinamentoRepository.findAll();
    }

	@PostMapping("/treinamento")
	public Treinamento addTreinamento(@RequestBody @Valid Treinamento treinamento) {
		return treinamentoRepository.save(treinamento);
	}
   
	@PutMapping("/treinamento")
	public Treinamento editTreinamento(@RequestBody @Valid Treinamento treinamento) {
		return treinamentoRepository.save(treinamento);
	}
	
   
	@DeleteMapping("/treinamento/{id}")
	public ResponseEntity<Void> deleteTreinamento(@PathVariable Long id) {
		treinamentoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}