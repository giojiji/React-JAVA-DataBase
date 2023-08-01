package com.example.demo;

import mysql.Users;
import java.util.Map;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import java.sql.SQLException;
import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000/")
public class Authorization {
    @GetMapping
    public Map<String, Object> login(@RequestHeader("email") String email, @RequestHeader("password") String password) throws SQLException {
        Users user = new Users();
        Map<String, Object> validCredentials = user.selectUser(email ,password);
        String reqEmail = email;
        String reqPassword = password;
    	String resEmail = (String) validCredentials.get("email");
        String resPassword = (String) validCredentials.get("password");
 

        boolean status = reqPassword.equals(resPassword) && reqEmail.equals(resEmail);

        Map<String, Object> response = new HashMap<>();
        response.put("status", status);

        return response;
    }
}

