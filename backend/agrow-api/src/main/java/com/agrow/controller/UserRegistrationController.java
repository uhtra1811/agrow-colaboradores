package com.agrow.controller;

import com.agrow.dto.UserAutheticatedDTO;


import com.agrow.dto.UserRegistrationDTO;
import com.agrow.model.User;
import com.agrow.repository.UserRepository;
import com.agrow.service.AtendimentoService;
import com.agrow.service.UserRegistrationService;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRegistrationController {

    private UserRegistrationService userRegistrationService;

    @Autowired
    public UserRegistrationController(UserRegistrationService userRegistrationService){
        this.userRegistrationService = userRegistrationService;
    }
    @Autowired
    public UserRepository userRepository;

    public UserRegistrationController(){
    }
    @Autowired
    public AtendimentoService atendimentoService;
    

    @PostMapping("/user")
    public ResponseEntity<UserRegistrationDTO> registrate(@RequestBody UserRegistrationDTO userRegistrationDTO){
        User user = userRegistrationService.registrate(userRegistrationDTO.toUser());
        return  new ResponseEntity<UserRegistrationDTO>(UserRegistrationDTO.toDTO(user, "Bearer "), HttpStatus.CREATED);
    }
    
 
    @GetMapping("/users")
    public Iterable<User> getUsers() { 
        return userRepository.findAll();
    }
    
    
    
    
	@PutMapping("/user")
	public User editUser(@RequestBody @Valid User user) {
		return userRepository.save(user);
	}


    
	@DeleteMapping("/user/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		userRepository.deleteById(id);
		return ResponseEntity.noContent().build();
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    @GetMapping("/export/{format}")
    private Iterable<User> exportReport(@PathVariable String format,HttpServletResponse response) throws FileNotFoundException, JRException{
	    response.setContentType("application/x-pdf");
	    response.setHeader("Content-disposition", "inline; filename=testReport.pdf");

    	return atendimentoService.exportReport(format);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    @GetMapping("/teste")
	public void testReport(ModelMap model, HttpServletResponse response) throws IOException, JRException 
	{
    	
    	Iterable<User> userList = getUsers();
    	File file = ResourceUtils.getFile("classpath:users.jrxml");
		JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
		

		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource((Collection<?>) userList);
		
    
	    Map<String, Object> params = new HashMap<String, Object>();

	    JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, params, ds);

	    response.setContentType("application/x-pdf");
	    response.setHeader("Content-disposition", "inline; filename=testReport.pdf");

	    final ServletOutputStream outStream = response.getOutputStream();
	    JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
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
	
	
	
}


