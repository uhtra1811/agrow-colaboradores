package com.agrow.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="TREINAMENTO_RELATORIO")
public class TreinamentoRelatorio implements Serializable{
    
       private static final long serialVersionUID = 1L; 
           
       @Id 

       private long id; 
       private String cliente;
       private String usuario;
       private String nivel;
       private Double avaliacao;
       private String atendente;
       private Date data;
     
    
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
    public String getNivel() {
		return nivel;
	}
	public void setNivel(String nivel) {
		this.nivel = nivel;
	}
	public Double getAvaliacao() {
			return avaliacao;
	}
	public void setAvaliacao(Double avaliacao) {
			this.avaliacao = avaliacao;
	}
	
	public String getAtendente() {
		return atendente;
	}
	public void setAtendente(String atendente) {
		this.atendente = atendente;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}

       
}
