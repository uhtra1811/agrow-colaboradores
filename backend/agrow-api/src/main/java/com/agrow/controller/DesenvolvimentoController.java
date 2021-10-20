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


import com.agrow.model.Desenvolvimento;
import com.agrow.model.DesenvolvimentoRelatorio;
import com.agrow.repository.DesenvolvimentoRelatorioRepository;
import com.agrow.repository.DesenvolvimentoRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DesenvolvimentoController {
	
    @Autowired
    public DesenvolvimentoRepository desenvolvimentoRepository;
    
    @Autowired
    public DesenvolvimentoRelatorioRepository desenvolvimentoRelatorioRepository;
	 
    
    
    @GetMapping("/desenvolvimentos")
    public List<Desenvolvimento> getDesenvolvimetos() {
        return desenvolvimentoRepository.findAll();
    }

	@PostMapping("/desenvolvimento")
	public Desenvolvimento addDesenvolvimeto(@RequestBody @Valid Desenvolvimento desenvolvimento) {
		return desenvolvimentoRepository.save(desenvolvimento);
	}
   
	@PutMapping("/edita-desenvolvimento")
	public Desenvolvimento editDesenvolvimeto(@RequestBody @Valid Desenvolvimento desenvolvimento) {
		return desenvolvimentoRepository.save(desenvolvimento);
	}
	

   
	@DeleteMapping("/desenvolvimento/{id}")
	public ResponseEntity<Void> deleteDesenvolvimeto(@PathVariable Long id) {
		desenvolvimentoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
    
	
	
	
	public List<DesenvolvimentoRelatorio> getDesenvolvimentosRelatorio() {
        return desenvolvimentoRelatorioRepository.findAll();
    }
	
	@PostMapping("/desenvolvimento-relatorio")
	public List<DesenvolvimentoRelatorio> addAtendimentoRelatorio(@RequestBody  @Valid List<DesenvolvimentoRelatorio> desenvolvimentoRelatorio) {
		
		return  (List<DesenvolvimentoRelatorio>) desenvolvimentoRelatorioRepository.saveAll(desenvolvimentoRelatorio);
	}
	
	
	@GetMapping("/desenvolvimento-pdf")
	public void geraRelatorioDesenvolvimento(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<DesenvolvimentoRelatorio> atendimentoList = getDesenvolvimentosRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/desenvolvimentos.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) atendimentoList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=atendimentos.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	
	@GetMapping("/desenvolvimento-cliente-pdf")
	public void geraRelatorioDesenvolvimentosCliente(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<DesenvolvimentoRelatorio> desenvolvimentoList = getDesenvolvimentosRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/desenvolvimento-cliente.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) desenvolvimentoList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=desenvolvimento.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	    
	

}