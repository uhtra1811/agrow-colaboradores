package com.agrow.dto;

import com.agrow.model.User;

public class UserAutheticatedDTO {
    private String tipo;
    private String usuario;
    private String token;

    public UserAutheticatedDTO(String usuario, String token, String tipo) {

        this.usuario = usuario;
        this.token = token;
        this.tipo = tipo;
    }

    public UserAutheticatedDTO(){}

    public static UserAutheticatedDTO toDTO(User user, String tipo) {
        return new UserAutheticatedDTO(user.getUsuario(), user.getToken(), tipo);
    }

    public String getUsuario() {
        return usuario;
    }

    public String getToken() {
        return token;
    }

    public String getTipo() {
        return tipo;
    }
}
