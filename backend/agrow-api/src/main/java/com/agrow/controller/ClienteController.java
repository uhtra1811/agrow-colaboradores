package com.agrow.controller;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.agrow.model.ClienteRelatorio;
import com.agrow.model.Cliente;
import com.agrow.repository.ClienteRelatorioRepository;
import com.agrow.repository.ClienteRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClienteController {
	
    @Autowired
    public ClienteRepository clienteRepository;
    
    @Autowired
    public ClienteRelatorioRepository clienteRelatorioRepository;
	 
    
    
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
    

	public List<ClienteRelatorio> getClientesRelatorio() {
        return clienteRelatorioRepository.findAll();
    }
	
	@PostMapping("/cliente-relatorio")
	public List<ClienteRelatorio> addClienteRelatorio(@RequestBody  @Valid List<ClienteRelatorio> clienteRelatorio) {
		
		return  (List<ClienteRelatorio>) clienteRelatorioRepository.saveAll(clienteRelatorio);
	}
	
	
	@GetMapping("/cliente-pdf")
	public void geraRelatorioCliente(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<ClienteRelatorio> clienteList = getClientesRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/cliente.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) clienteList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=clientes.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	
	@GetMapping("/cliente-resumido-pdf")
	public void geraRelatorioClientesCliente(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<ClienteRelatorio> clienteList = getClientesRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/cliente-resumido.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) clienteList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=cliente.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	    
}