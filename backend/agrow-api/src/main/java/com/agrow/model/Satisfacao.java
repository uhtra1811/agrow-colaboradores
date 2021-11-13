package com.agrow.model;

	import java.io.Serializable;

	import java.sql.Date;

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.Table;


	@Entity
	@Table(name="SATISFACAO")
	public class Satisfacao  implements Serializable{
	         
		        private static final long serialVersionUID = 1L; 
		            
		        @Id 
		        @GeneratedValue(strategy=GenerationType.AUTO)
		        private long id; 
				private Double aciona_trigger;
				
				
				public Double getAciona_trigger() {
					return aciona_trigger;
				}
				public void setAciona_trigger(Double aciona_trigger) {
					this.aciona_trigger = aciona_trigger;
				}

}
