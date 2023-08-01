package com.example.demo;


import mysql.UserPassword;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/reset")
@CrossOrigin(origins = "http://localhost:3000/")
public class ForgotPassword {
    @PostMapping
    public Map<String, Object> resetPassword(@RequestParam("Email") String email,
                                @RequestParam("personalNumber") String personalNumber,
                                @RequestParam("phoneNumber") String phoneNumber,
                                @RequestParam("password") String password) throws SQLException {

        UserPassword user = new UserPassword();
        boolean status =  user.newUser(email, personalNumber, phoneNumber, password);

        Map<String, Object> response = new HashMap<>();

        if(status) {
            response.put("message", "password updated successfully!");
        } else {
            response.put("message", "invalid information");
        }
        return response;
    }
}
