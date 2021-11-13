package com.agrow.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ATENDIMENTO")
public class Atendimento implements Serializable{
            
        private static final long serialVersionUID = 1L; 
            
        @Id 
        @GeneratedValue(strategy=GenerationType.AUTO)
        private long id; 
        
		private String cliente;
        private String usuario;
        private String motivo;
        private String meiodecontato;
        private String auxilio;
        private String solucao;
        private Double avaliacao;
        private String atendente;
        private String minutos;
		private Date data;
        
        
     
		public static long getSerialversionuid() {
			return serialVersionUID;
		}

        
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
		public String getMeiodecontato() {
			return meiodecontato;
		}
		public void setMeiodecontato(String meiodecontato) {
			this.meiodecontato = meiodecontato;
		}
		public String getSolucao() {
			return solucao;
		}
		public void setSolucao(String solucao) {
			this.solucao = solucao;
		}
		
        public String getAuxilio() {
			return auxilio;
		}
		public void setAuxilio(String auxilio) {
			this.auxilio = auxilio;
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
		
		public String getMinutos() {
			return minutos;
		}


		public void setMinutos(String minutos) {
			this.minutos = minutos;
		}


		public Date getData() {
			return data;
		}
		public void setData(Date data) {
			this.data = data;
		}
        
}