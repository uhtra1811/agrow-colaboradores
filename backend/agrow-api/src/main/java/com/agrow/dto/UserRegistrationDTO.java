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

    public UserRegistrationDTO() {

    }

    public UserRegistrationDTO(String usuario, String senha, String token, String empresa) {

        this.usuario = usuario;
        this.empresa = empresa;
        this.token = token;
        this.senha = senha;
    }
    
    public static UserRegistrationDTO toDTO(User user, String tipo) {
        return new UserRegistrationDTO(user.getUsuario(), user.getToken(),user.getEmpresa(), tipo);
    }
    
    public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User toUser() {
        return new User(id, getUsuario(), getSenha(), getEmpresa());
    }


    public String getUsuario() {
        return usuario;
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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
