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

import com.agrow.model.AtendimentoRelatorio;
import com.agrow.model.Treinamento;
import com.agrow.model.TreinamentoRelatorio;
import com.agrow.repository.TreinamentoRelatorioRepository;
import com.agrow.repository.TreinamentoRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TreinamentoController {
	
    @Autowired
    public TreinamentoRepository treinamentoRepository;
	 
    @Autowired
    public TreinamentoRelatorioRepository treinamentoRelatorioRepository;
    
    @GetMapping("/treinamentos")
    public List<Treinamento> getTreinamentos() {
        return treinamentoRepository.findAll();
    }

	@PostMapping("/treinamento")
	public Treinamento addTreinamento(@RequestBody @Valid Treinamento treinamento) {
		return treinamentoRepository.save(treinamento);
	}
   
	@PutMapping("/edita-treinamento")
	public Treinamento editTreinamento(@RequestBody @Valid Treinamento treinamento) {
		return treinamentoRepository.save(treinamento);
	}
	
   
	@DeleteMapping("/treinamento/{id}")
	public ResponseEntity<Void> deleteTreinamento(@PathVariable Long id) {
		treinamentoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	public List<TreinamentoRelatorio> getTreinamentosRelatorio() {
        return treinamentoRelatorioRepository.findAll();
    }
	
	@PostMapping("/treinamento-relatorio")
	public List<TreinamentoRelatorio> addAtendimentoRelatorio(@RequestBody  @Valid List<TreinamentoRelatorio> treinamentoRelatorio) {
		
		return  (List<TreinamentoRelatorio>) treinamentoRelatorioRepository.saveAll(treinamentoRelatorio);
	}
	
	
	@GetMapping("/treinamento-pdf")
	public void geraRelatorioTreinamento(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<TreinamentoRelatorio> treinamentoList = getTreinamentosRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/treinamentos.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) treinamentoList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=treinamento.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	
	@GetMapping("/treinamento-cliente-pdf")
	public void geraRelatorioTreinamentosCliente(ModelMap model, HttpServletResponse response) throws IOException, JRException {
		//dados do relatorio
	    Iterable<TreinamentoRelatorio> treinamentoList = getTreinamentosRelatorio();
	    //caminho do jrxml do relatorio
	    File file = ResourceUtils.getFile("classpath:reports/treinamentos-cliente.jrxml");
		//jasper compilador
	    JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
	    
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) treinamentoList);    
		
		//mapeia parametros do relatorio
		Map<String, Object> params = new HashMap<String, Object>();
		
		//preenche relatorio
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=treinamento.pdf");
		
		//output do arquivo para o front
		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	    
}