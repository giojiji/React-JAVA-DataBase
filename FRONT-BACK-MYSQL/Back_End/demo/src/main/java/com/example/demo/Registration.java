package com.example.demo;

import mymethods.NewUserDetails;
import mysql.AddUser;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "http://localhost:3000/")
public class Registration {
    @PostMapping
    public Map<String, Object> register(@RequestBody NewUserDetails userRequest) throws SQLException {
        String email = userRequest.getEmail();
        String password = userRequest.getPassword();
        String firstName = userRequest.getFirstName();
        String lastName = userRequest.getLastName();
        String personalNumber = userRequest.getPersonalNumber();
        String phoneNumber = userRequest.getPhoneNumber();
        AddUser user = new AddUser();
        boolean status =  user.newUser(email,password, firstName, lastName, personalNumber, phoneNumber );
        Map<String, Object> response = new HashMap<>();

        if(status) {
            response.put("message", "User registered successfully!");

        } else {
            response.put("message", "invalid Email");
        }
return response;
    }
}

