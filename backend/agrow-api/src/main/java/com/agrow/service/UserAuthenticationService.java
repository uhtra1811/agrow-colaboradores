package com.agrow.service;

import com.agrow.dto.DadosLogin;
import com.agrow.exception.ExistingUsuarioException;
import com.agrow.exception.ExpiredTokenException;
import com.agrow.exception.InvalidLoginException;
import com.agrow.exception.InvalidTokenException;
import com.agrow.model.User;
import com.agrow.repository.UserRepository;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserAuthenticationService {

    private final UserRepository userRepository;
    private final TokenService tokenService;

    @Autowired
    public UserAuthenticationService(UserRepository userRepository, TokenService tokenService){
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }


    /*public User authenticate(DadosLogin dados, String token){
        User user = userRepository.findByUsuario(dados.getUsuario()).orElseThrow(ExistingUsuarioException::new);
        if(dados.getSenha().equals(user.getSenha())) { //&& !token.isEmpty() && validate(token)) {
        	 user.setToken(tokenService.generateToken(user));
            return user;
        }
        else {
            throw new InvalidLoginException();
        }
    }*/
    public User authenticate(DadosLogin dados){
        User user = userRepository.findByUsuario(dados.getUsuario()).orElseThrow(ExistingUsuarioException::new);
        if(dados.getSenha().equals(user.getSenha())) { //&& !token.isEmpty() && validate(token)) {
        	 user.setToken(tokenService.generateToken(user));
            return user;
        }
        else {
            throw new InvalidLoginException();
        }
    }
    
    public void authenticateGet(String token){if( !token.isEmpty() && validate(token));
            
        }
    
    
    public boolean validate(String token) {
        try {
            String tokenTratado = token.replace("Bearer ", "");
            Claims claims = tokenService.decodeToken(tokenTratado);

            System.out.println(claims.getIssuer());
            System.out.println(claims.getIssuedAt());
            //Verifica se o token está expirado
            if (claims.getExpiration().before(new Date(System.currentTimeMillis()))) throw new ExpiredTokenException();
            System.out.println(claims.getExpiration());
            return true;
        } catch (ExpiredTokenException et){
            et.printStackTrace();
            throw et;
        } catch (Exception e) {
            e.printStackTrace();
            throw new InvalidTokenException();
        }

    }

}


