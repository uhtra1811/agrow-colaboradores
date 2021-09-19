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


import com.agrow.model.Auditoria;
import com.agrow.repository.AuditoriaRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuditoriaController {
	
    @Autowired
    public AuditoriaRepository auditoriaRepository;
	 
    
    
    @GetMapping("/auditorias")
    public List<Auditoria> getAuditorias() {
        return auditoriaRepository.findAll();
    }

	@PostMapping("/auditoria")
	public Auditoria addAuditoria(@RequestBody @Valid Auditoria auditoria) {
		return auditoriaRepository.save(auditoria);
	}
   
	@PutMapping("/auditoria")
	public Auditoria editAuditoria(@RequestBody @Valid Auditoria auditoria) {
		return auditoriaRepository.save(auditoria);
	}
	

   
	@DeleteMapping("/auditoria/{id}")
	public ResponseEntity<Void> deleteAuditoria(@PathVariable Long id) {
		auditoriaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
    
