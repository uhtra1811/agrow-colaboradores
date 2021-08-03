package com.agrow.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ATENDIMENTO_RELATORIO")
public class AtendimentoRelatorio implements Serializable{
            
        private static final long serialVersionUID = 1L; 
            
        @Id 
        @GeneratedValue(strategy=GenerationType.AUTO)
        private long id; 
            
        private String atendimento;

        public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getAtendimento() {
			return atendimento;
		}

		public void setAtendimento(String atendimento) {
			this.atendimento = atendimento;
		}

		public String getMeiocontato() {
			return meiocontato;
		}

		public void setMeiocontato(String meiocontato) {
			this.meiocontato = meiocontato;
		}

		public String getMotivo() {
			return motivo;
		}

		public void setMotivo(String motivo) {
			this.motivo = motivo;
		}

		public String getSolucao() {
			return solucao;
		}

		public void setSolucao(String solucao) {
			this.solucao = solucao;
		}

		private String meiocontato;
        
        private String motivo;
        
        private String solucao;
        
        


}