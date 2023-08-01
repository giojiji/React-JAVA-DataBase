package com.example.demo;


import mysql.MyOrders;
import mysql.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/myaccount")
@CrossOrigin(origins = "http://localhost:3000/")
public class LoadUserDetails {
    @GetMapping
    public  Map<String, Object> resetPassword(@RequestParam("email") String email) throws SQLException {
        UserDetails user = new UserDetails();
        return user.myDetails(email);
    }
}
