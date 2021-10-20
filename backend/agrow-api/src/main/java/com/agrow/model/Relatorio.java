package com.agrow.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RELATORIO")
public class Relatorio implements Serializable{
	  private static final long serialVersionUID = 1L; 
      
      @Id 
      @GeneratedValue(strategy=GenerationType.AUTO)
      private long id; 
      private String edita;
      
      
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEdita() {
		return edita;
	}
	public void setEdita(String edita) {
		this.edita = edita;
	}

}
