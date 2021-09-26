package com.agrow.dto;

import com.agrow.model.User;

public class UserAutheticatedDTO {
    private String tipo;
    private String usuario;
    private String empresa;
    private String token;
    private String permissao;

    public UserAutheticatedDTO(String usuario, String token, String tipo, String empresa,  String permissao) {

        this.usuario = usuario;
        this.empresa = empresa;
        this.token = token;
        this.tipo = tipo;
        this.permissao = permissao;
    }

    public UserAutheticatedDTO(){}

    public static UserAutheticatedDTO toDTO(User user, String tipo) {
        return new UserAutheticatedDTO(user.getUsuario(), user.getToken(),tipo,user.getEmpresa(), user.getPermissao());
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
    public String getPermissao() {
        return permissao;
    }
}
