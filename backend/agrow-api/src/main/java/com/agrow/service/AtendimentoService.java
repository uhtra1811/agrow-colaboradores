package com.agrow.service;

import com.agrow.model.User;
import com.agrow.repository.UserRepository;
import com.lowagie.text.pdf.codec.Base64.InputStream;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;



@Service
public class AtendimentoService {
	
	public   List<User> getUserList() {
		List<User> users = new ArrayList<User>();

		return users;
		}
	@Autowired
	 public UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }
	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    @GetMapping("/users1")
    public Iterable<User> getUsers1() {
        return userRepository.findAll();
    }
    
	
	public Iterable<User> exportReport(String format) throws FileNotFoundException, JRException{
		Iterable<User> userList = getUsers();
		String path = "/home/uhtra/";
		File file = ResourceUtils.getFile("classpath:users.jrxml");
		JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
		
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) userList);
		
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("gain", "know");
		
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper,parameters,ds);
		
		if(format.equalsIgnoreCase("html")) {
			JasperExportManager.exportReportToHtmlFile(jasperPrint, path +"users.html");
		}
		if(format.equalsIgnoreCase("pdf")) {
			JasperExportManager.exportReportToPdfFile(jasperPrint, path +"users.pdf");
			
		}
		return userList;
	}   
	
	
	
	
	
	
	
	
	@GetMapping("/export1")
    @ResponseBody
    public void getRpt1(HttpServletResponse response) throws JRException, IOException {
      InputStream jasperStream = (InputStream) this.getClass().getResourceAsStream("/jasperreports/user.jsxml");
      Map<String,Object> params = new HashMap<>();
      JasperReport jasperReport = (JasperReport) JRLoader.loadObject(jasperStream);
      JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, new JREmptyDataSource());

      response.setContentType("application/x-pdf");
      response.setHeader("Content-disposition", "inline; filename=helloWorldReport.pdf");

      final ServletOutputStream outStream = response.getOutputStream();
      JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
    }
	

	

}
