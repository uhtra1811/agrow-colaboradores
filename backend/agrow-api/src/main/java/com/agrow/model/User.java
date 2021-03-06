package com.agrow.model;


import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String usuario;
    private String empresa;
    private String senha;
    private String token;
    private String permissao; 
    


	public User(Long id,  String usuario, String empresa, String senha, String permissao){
        this.id = id;
        this.usuario = usuario;
        this.empresa = empresa;
        this.senha = senha;
        this.permissao = permissao; 
    }

    public User(String usuario, String senha){
        this.usuario = usuario;
        this.senha = senha;
    }

    public User(){

    }


    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }
    public String getPermissao() {
		return permissao;
	}

	public void setPermissao(String permissao) {
		this.permissao = permissao;
	}

	public String getEmpresa() {
		return empresa;
	}

	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}
    
}
