package com.example.demo;


import mymethods.BookedHotelDetails;
import mysql.Orders;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:3000/")
public class BookHotel {
    @PostMapping
    public Map<String, Object> resetPassword(@RequestBody BookedHotelDetails newBookBody) throws SQLException {

        String email = newBookBody.getEmail();
        String id = newBookBody.getId();
        String fromDate = newBookBody.getFromDate();
        String toDate = newBookBody.getToDate();
        String price = newBookBody.getPrice();
        String quantity = newBookBody.getQuantity();
        String fullPrice = newBookBody.getFullPrice();

        Orders user = new Orders();
        boolean status =  user.newOrder(email, id, fromDate, toDate, price, quantity, fullPrice);

        Map<String, Object> response = new HashMap<>();

        if(status) {
            response.put("message", "You booked successfully!");
        } else {
            response.put("message", "Sorry, please try again");
        }
        return response;
    }
}
