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


import com.agrow.model.Auditoria;
import com.agrow.model.AuditoriaRelatorio;
import com.agrow.repository.AuditoriaRelatorioRepository;
import com.agrow.repository.AuditoriaRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuditoriaController {
	
    @Autowired
    public AuditoriaRepository auditoriaRepository;
    
    @Autowired
    public AuditoriaRelatorioRepository auditoriaRelatorioRepository;
    
    
    @GetMapping("/auditorias")
    public List<Auditoria> getAuditorias() {
        return auditoriaRepository.findAll();
    }

	@PostMapping("/auditoria")
	public Auditoria addAuditoria(@RequestBody @Valid Auditoria auditoria) {
		return auditoriaRepository.save(auditoria);
	}
   
	@PutMapping("/edita-auditoria")
	public Auditoria editAuditoria(@RequestBody @Valid Auditoria auditoria) {
		return auditoriaRepository.save(auditoria);
	}
	

   
	@DeleteMapping("/auditoria/{id}")
	public ResponseEntity<Void> deleteAuditoria(@PathVariable Long id) {
		auditoriaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	
	public List<AuditoriaRelatorio> getAuditoriasRelatorio() {
        return auditoriaRelatorioRepository.findAll();
    }
	
	@PostMapping("/auditoria-relatorio")
	public List<AuditoriaRelatorio> addAtendimentoRelatorio(@RequestBody  @Valid List<AuditoriaRelatorio> auditoriaRelatorio) {
		
		return  (List<AuditoriaRelatorio>) auditoriaRelatorioRepository.saveAll(auditoriaRelatorio);
	}
	
	
	@GetMapping("/auditoria-pdf")
	public void geraRelatorioAuditoria(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<AuditoriaRelatorio> auditoriaList = getAuditoriasRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/auditorias.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) auditoriaList);    
		
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
	
	@GetMapping("/auditoria-cliente-pdf")
	public void geraRelatorioAuditoriasCliente(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<AuditoriaRelatorio> auditoriaList = getAuditoriasRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/auditoria-cliente.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) auditoriaList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=auditoria.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	    
}
    
