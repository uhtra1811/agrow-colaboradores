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


import com.agrow.model.Cliente;
import com.agrow.repository.ClienteRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClienteController {
	
    @Autowired
    public ClienteRepository clienteRepository;
	 
    
    
    @GetMapping("/clientes")
    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }

	@PostMapping("/cliente")
	public Cliente addCliente(@RequestBody @Valid Cliente cliente) {
		return clienteRepository.save(cliente);
	}
   
	@PutMapping("/edita-cliente")
	public Cliente editCliente(@RequestBody @Valid Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	

   
	@DeleteMapping("/cliente/{id}")
	public ResponseEntity<Void> deleteCliente(@PathVariable Long id) {
		clienteRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
    

}
