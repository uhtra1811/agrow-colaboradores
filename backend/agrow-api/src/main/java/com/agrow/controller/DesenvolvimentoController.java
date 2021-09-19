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


import com.agrow.model.Desenvolvimento;
import com.agrow.repository.DesenvolvimentoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DesenvolvimentoController {
	
    @Autowired
    public DesenvolvimentoRepository desenvolvimentoRepository;
	 
    
    
    @GetMapping("/desenvolvimentos")
    public List<Desenvolvimento> getDesenvolvimetos() {
        return desenvolvimentoRepository.findAll();
    }

	@PostMapping("/desenvolvimento")
	public Desenvolvimento addDesenvolvimeto(@RequestBody @Valid Desenvolvimento desenvolvimento) {
		return desenvolvimentoRepository.save(desenvolvimento);
	}
   
	@PutMapping("/desenvolvimento")
	public Desenvolvimento editDesenvolvimeto(@RequestBody @Valid Desenvolvimento desenvolvimento) {
		return desenvolvimentoRepository.save(desenvolvimento);
	}
	

   
	@DeleteMapping("/desenvolvimento/{id}")
	public ResponseEntity<Void> deleteDesenvolvimeto(@PathVariable Long id) {
		desenvolvimentoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
    

}