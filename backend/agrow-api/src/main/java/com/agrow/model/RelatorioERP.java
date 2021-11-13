package com.agrow.model;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RELATORIO_ERP")
public class RelatorioERP  implements Serializable{
	  private static final long serialVersionUID = 1L; 
      
      @Id 
      private long id; 
      private String relatorio;
      
      
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRelatorioERP() {
		return relatorio;
	}
	public void setRelatorioERP(String edita) {
		this.relatorio = edita;
	}

}