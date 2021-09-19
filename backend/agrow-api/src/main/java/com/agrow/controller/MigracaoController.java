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


import com.agrow.model.Migracao;
import com.agrow.repository.MigracaoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MigracaoController {
	
    @Autowired
    public MigracaoRepository migracaoRepository;
	 
    
    
    @GetMapping("/migracoes")
    public List<Migracao> getMigracoes() {
        return migracaoRepository.findAll();
    }

	@PostMapping("/migracao")
	public Migracao addMigracao(@RequestBody @Valid Migracao migracao) {
		return migracaoRepository.save(migracao);
	}
   
	@PutMapping("/migracao")
	public Migracao editMigracao(@RequestBody @Valid Migracao migracao) {
		return migracaoRepository.save(migracao);
	}
	
   
	@DeleteMapping("/migracao/{id}")
	public ResponseEntity<Void> deleteMigracao(@PathVariable Long id) {
		migracaoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
    