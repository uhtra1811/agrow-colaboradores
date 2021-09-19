package com.agrow.dto;

import com.agrow.model.User;

public class UserAutheticatedDTO {
    private String tipo;
    private String usuario;
    private String empresa;
    private String token;

    public UserAutheticatedDTO(String usuario, String token, String tipo, String empresa) {

        this.usuario = usuario;
        this.empresa = empresa;
        this.token = token;
        this.tipo = tipo;
    }

    public UserAutheticatedDTO(){}

    public static UserAutheticatedDTO toDTO(User user, String tipo) {
        return new UserAutheticatedDTO(user.getUsuario(), user.getToken(),tipo,user.getEmpresa());
    }

    public String getUsuario() {
        return usuario;
    }

    public String getEmpresa() {
        return empresa;
    }


    public String getToken() {
        return token;
    }

    public String getTipo() {
        return tipo;
    }
}
