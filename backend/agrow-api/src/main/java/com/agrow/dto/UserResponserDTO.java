package com.agrow.dto;

import com.agrow.model.User;

import com.fasterxml.jackson.annotation.JsonAutoDetect;


@JsonAutoDetect(fieldVisibility= JsonAutoDetect.Visibility.ANY)
public class UserResponserDTO {

    private Long id;


    private String usuario;
    private String senha;

    public UserResponserDTO(String usuario, String senha){

        this.usuario = usuario;
        this.senha = senha;
    }
    public UserResponserDTO(){}

    public static UserResponserDTO toDTO(User user) {
        return new UserResponserDTO(user.getUsuario(), user.getSenha());
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
