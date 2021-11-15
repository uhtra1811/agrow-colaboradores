package com.agrow.model;

import java.io.Serializable;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CLIENTES")
public class Cliente implements Serializable{
            
        private static final long serialVersionUID = 1L; 
            
        @Id 
        @GeneratedValue(strategy=GenerationType.AUTO)
        private long id; 
        @Column(unique = true)    
        private String cliente;
        private int	licencas;
        private String versao;
        private String telefone;
        private double firebird;
        private String validacao;
        private Date validar;
        private Double satisfacao;
		private Double satisfacao_atendimento;
        private Double satisfacao_treinamento;
        private Double satisfacao_desenvolvimento;
        private Double satisfacao_migracao;
        private Double satisfacao_auditoria;
        
         
        
		public  Date getValidar() {
			return validar;
		}

		public void setValidar( Date validar) {
			this.validar = validar;
		}

		public Double getSatisfacao() {
			return satisfacao;
		}

		public void setSatisfacao(Double satisfacao) {
			this.satisfacao = satisfacao;
		}

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
        public Double getSatisfacao_atendimento() {
			return satisfacao_atendimento;
		}

		public void setSatisfacao_atendimento(Double satisfacao_atendimento) {
			this.satisfacao_atendimento = satisfacao_atendimento;
		}

		public Double getSatisfacao_treinamento() {
			return satisfacao_treinamento;
		}

		public void setSatisfacao_treinamento(Double satisfacao_treinamento) {
			this.satisfacao_treinamento = satisfacao_treinamento;
		}

		public Double getSatisfacao_desenvolvimento() {
			return satisfacao_desenvolvimento;
		}

		public void setSatisfacao_desenvolvimento(Double satisfacao_desenvolvimento) {
			this.satisfacao_desenvolvimento = satisfacao_desenvolvimento;
		}

		public Double getSatisfacao_migracao() {
			return satisfacao_migracao;
		}

		public void setSatisfacao_migracao(Double satisfacao_migracao) {
			this.satisfacao_migracao = satisfacao_migracao;
		}

		public Double getSatisfacao_auditoria() {
			return satisfacao_auditoria;
		}

		public void setSatisfacao_auditoria(Double satisfacao_auditoria) {
			this.satisfacao_auditoria = satisfacao_auditoria;
		}
   

}