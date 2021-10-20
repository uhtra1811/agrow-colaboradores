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


import com.agrow.model.Migracao;
import com.agrow.model.MigracaoRelatorio;
import com.agrow.repository.MigracaoRelatorioRepository;
import com.agrow.repository.MigracaoRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MigracaoController {
	
    @Autowired
    public MigracaoRepository migracaoRepository;
    
    @Autowired
    public MigracaoRelatorioRepository migracaoRelatorioRepository;
	 
	 
    
    
    @GetMapping("/migracoes")
    public List<Migracao> getMigracoes() {
        return migracaoRepository.findAll();
    }

	@PostMapping("/migracao")
	public Migracao addMigracao(@RequestBody @Valid Migracao migracao) {
		return migracaoRepository.save(migracao);
	}
   
	@PutMapping("/edita-migracao")
	public Migracao editMigracao(@RequestBody @Valid Migracao migracao) {
		return migracaoRepository.save(migracao);
	}
	
   
	@DeleteMapping("/migracao/{id}")
	public ResponseEntity<Void> deleteMigracao(@PathVariable Long id) {
		migracaoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	public List<MigracaoRelatorio> getMigracoesRelatorio() {
        return migracaoRelatorioRepository.findAll();
    }
	
	@PostMapping("/migracao-relatorio")
	public List<MigracaoRelatorio> addMigracaoRelatorio(@RequestBody  @Valid List<MigracaoRelatorio> migracaoRelatorio) {
		
		return  (List<MigracaoRelatorio>) migracaoRelatorioRepository.saveAll(migracaoRelatorio);
	}
	
	
	@GetMapping("/migracao-pdf")
	public void geraRelatorioMigracao(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<MigracaoRelatorio> migracaoList = getMigracoesRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/migracao.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) migracaoList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=migracao.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	
	@GetMapping("/migracao-cliente-pdf")
	public void geraRelatorioMigracoesCliente(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<MigracaoRelatorio> migracaoList = getMigracoesRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/migracao-cliente.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) migracaoList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=migracao.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
}
    