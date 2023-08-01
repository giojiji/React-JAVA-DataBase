package com.example.demo;


import mysql.Orders;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/unbook")
@CrossOrigin(origins = "http://localhost:3000/")
public class UnBookHotel {
    @PostMapping
    public Map<String, Object> unbookHotel(@RequestParam("email") String email,
                                             @RequestParam("id") String id,
                                           @RequestParam("orderId") String orderId
                                             ) throws SQLException {

        Orders user = new Orders();
        boolean status =  user.deleteOrder(email, id, orderId);

        Map<String, Object> response = new HashMap<>();

        if(status) {
            response.put("message", "You unbooked successfully!");
        } else {
            response.put("message", "Sorry, please try again");
        }
        return response;
    }
}
