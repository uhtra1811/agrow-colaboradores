package com.agrow.dto;

import com.agrow.model.User;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility= JsonAutoDetect.Visibility.ANY)
public class UserRegistrationDTO extends User {

    private Long id;

    private String usuario;
    private String senha;

    public UserRegistrationDTO() {

    }

    public UserRegistrationDTO(String usuario, String senha) {

        this.usuario = usuario;
        this.senha = senha;
    }

    public User toUser() {
        return new User(getUsuario(), getSenha());
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
}
