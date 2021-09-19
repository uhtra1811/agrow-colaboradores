package com.agrow.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="TREINAMENTO")
public class Treinamento implements Serializable{
    
       private static final long serialVersionUID = 1L; 
           
       @Id 
       @GeneratedValue(strategy=GenerationType.AUTO)
       private long id; 
       private String cliente;
       private String usuario;
       private String motivo;
       private String data;
     
    
       public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCliente() {
		return cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getMotivo() {
		return motivo;
	}
	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}

       
}
