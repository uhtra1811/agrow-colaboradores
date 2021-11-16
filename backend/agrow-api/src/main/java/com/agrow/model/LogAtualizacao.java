package com.agrow.model;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="LOG_ATUALIZACAO")
public class LogAtualizacao  implements Serializable{
	  private static final long serialVersionUID = 1L; 
      
      @Id 
      @GeneratedValue(strategy=GenerationType.AUTO)
      private long id; 
      private String versao;
      private String log;
      
      
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getVersao() {
		return versao;
	}
	public void setVersao(String versao) {
		this.versao = versao;
	}
	public String getLog() {
		return log;
	}
	public void setLog(String log) {
		this.log = log;
	}


}