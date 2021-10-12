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

import com.agrow.model.Atendimento;
import com.agrow.model.AtendimentoRelatorio;
import com.agrow.model.User;
import com.agrow.repository.AtendimentoRelatorioRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AtendimentoRelatorioController {

    @Autowired
    public AtendimentoRelatorioRepository atendimentoRelatorioRepository;
	 

    @GetMapping("/atendimentos1")
    public List<AtendimentoRelatorio> getAtendimentos() {
        return atendimentoRelatorioRepository.findAll();
    }

	@PostMapping("/atendimento-relatorio")
	public List<AtendimentoRelatorio> addAtendimentoRelatorio(@RequestBody  @Valid List<AtendimentoRelatorio> atendimentoRelatorio) {
		return  (List<AtendimentoRelatorio>) atendimentoRelatorioRepository.saveAll(atendimentoRelatorio);
	}

   
	@PutMapping("/edita-atendimentoRelatorio")
	public AtendimentoRelatorio editAtendimento(@RequestBody @Valid AtendimentoRelatorio atendimentoRelatorio) {
		return atendimentoRelatorioRepository.save(atendimentoRelatorio);
	}
	
   
	@DeleteMapping("/atendimentoRelatorio/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		atendimentoRelatorioRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	
	@GetMapping("/atendimentos-pdf1")
	public void testReport(ModelMap model, HttpServletResponse response) throws IOException, JRException {
	    Iterable<AtendimentoRelatorio> atendimentoList = getAtendimentos();
	    File file = ResourceUtils.getFile("classpath:reports/atendimentos.jrxml");
		JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
			
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) atendimentoList);
			
	    
		Map<String, Object> params = new HashMap<String, Object>();

		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

		response.setContentType("application/x-pdf");
		response.setHeader("Content-disposition", "inline; filename=testReport.pdf");

		final ServletOutputStream outStream = response.getOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}
	    
}
