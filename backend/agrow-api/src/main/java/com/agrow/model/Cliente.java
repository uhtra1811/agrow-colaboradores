package com.agrow.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CLIENTE")
public class Cliente implements Serializable{
            
        private static final long serialVersionUID = 1L; 
            
        @Id 
        @GeneratedValue(strategy=GenerationType.AUTO)
        private long id; 
            
        private String cliente;
        private int	licencas;
        private String versao;
        private String telefone;
        private double firebird;
        private String validacao;
        
        
        

		public String getTelefone() {
			return telefone;
		}

		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}

		public int getLicencas() {
			return licencas;
		}

		public void setLicencas(int licencas) {
			this.licencas = licencas;
		}

		public String getVersao() {
			return versao;
		}

		public void setVersao(String versao) {
			this.versao = versao;
		}

		public double getFirebird() {
			return firebird;
		}

		public void setFirebird(double firebird) {
			this.firebird = firebird;
		}

		public String getValidacao() {
			return validacao;
		}

		public void setValidacao(String validacao) {
			this.validacao = validacao;
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
            

}