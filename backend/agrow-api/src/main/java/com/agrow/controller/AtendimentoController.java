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
import com.agrow.model.Atendimento;
import com.agrow.repository.AtendimentoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AtendimentoController {

    @Autowired
    public AtendimentoRepository atendimentoRepository;
	 

    
 
    @GetMapping("/atendimentos")
    public List<Atendimento> getAtendimentos() {
        return atendimentoRepository.findAll();
    }

	@PostMapping("/atendimento")
	public Atendimento addAtendimento(@RequestBody @Valid Atendimento atendimento) {
		return atendimentoRepository.save(atendimento);
	}
   
	@PutMapping("/atendimento1")
	public Atendimento editAtendimento(@RequestBody @Valid Atendimento atendimento) {
		return atendimentoRepository.save(atendimento);
	}
	

   
	@DeleteMapping("/atendimento/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		atendimentoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
