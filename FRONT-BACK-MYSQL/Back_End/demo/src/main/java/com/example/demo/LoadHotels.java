package com.example.demo;

import mysql.Hotels;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/hotels")
@CrossOrigin(origins = "http://localhost:3000/")
public class LoadHotels {
    @GetMapping
    public List<Map<String, Object>> loadAllHotels() throws SQLException {
        Hotels allHotels = new Hotels();
        return allHotels.hotels();
    }
}

