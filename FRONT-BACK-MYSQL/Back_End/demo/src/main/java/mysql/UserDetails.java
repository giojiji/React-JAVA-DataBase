package mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserDetails extends StartMysql {

    Statement s;

    public UserDetails() throws SQLException {
        this.s = startConnection();
    }
    public Map<String, Object> myDetails(String email) throws SQLException {

        ResultSet rsjoin = s.executeQuery(
                "select a.personalNumber, a.phoneNumber, a.firstName, a.lastName from users AS a WHERE a.Email = '"+email+"'");

        rsjoin.next();
            Map<String, Object> hotelDetails = new HashMap<>();
            hotelDetails.put("personalNumber", rsjoin.getString("a.personalNumber"));
            hotelDetails.put("phoneNumber", rsjoin.getString("a.phoneNumber"));
            hotelDetails.put("firstName", rsjoin.getString("a.firstName"));
            hotelDetails.put("lastName", rsjoin.getString("a.lastName"));

        return hotelDetails;
    }
}

