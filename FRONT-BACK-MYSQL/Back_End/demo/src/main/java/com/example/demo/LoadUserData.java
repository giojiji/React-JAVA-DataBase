package com.example.demo;


import mysql.MyOrders;
import mysql.Orders;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/myaccounthotels")
@CrossOrigin(origins = "http://localhost:3000/")
public class LoadUserData {
    @PostMapping
    public List<Map<String, Object>> resetPassword(@RequestParam("email") String email) throws SQLException {
        MyOrders user = new MyOrders();
        return user.myDetails(email);
    }
}
