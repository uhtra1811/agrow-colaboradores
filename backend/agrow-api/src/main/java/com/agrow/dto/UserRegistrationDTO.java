package com.agrow.dto;

import com.agrow.model.User;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility= JsonAutoDetect.Visibility.ANY)
public class UserRegistrationDTO extends User {

    private Long id;

    private String usuario;
    private String empresa; 
    private String token;
    private String senha;
    private String permissao;

    public UserRegistrationDTO() {

    }

    public UserRegistrationDTO(String usuario, String senha, String token, String empresa, String permissao) {

        this.usuario = usuario;
        this.permissao = permissao;
        this.token = token;
        this.senha = senha;
        this.empresa = empresa;
    }
    
    public static UserRegistrationDTO toDTO(User user, String tipo) {
        return new UserRegistrationDTO(user.getUsuario(), user.getToken(),user.getPermissao(), tipo,user.getEmpresa());
    }
    
    public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User toUser() {
        return new User(id, getUsuario(), getEmpresa(),getSenha(), getPermissao());
    }


    public String getUsuario() {
        return usuario;
    }

    public String getPermissao() {
        return permissao;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    

    public String getEmpresa() {
		return empresa;
	}

	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}

	public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setPermissao(String permissao) {
        this.permissao = permissao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
