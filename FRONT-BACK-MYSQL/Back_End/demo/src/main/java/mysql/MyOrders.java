package mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MyOrders extends StartMysql {
	Statement s;

	public MyOrders() throws SQLException {
		this.s = startConnection();
	}

	public List<Map<String, Object>> myDetails(String email) throws SQLException {
		List<Map<String, Object>> hotelsList = new ArrayList<>();
		ResultSet rsjoin = s.executeQuery(
				"select b.id, a.personalNumber, a.phoneNumber, a.firstName, a.lastName, b.fromdate, b.todate, b.quantity, b.fullamount, b.orderdate, c.id, c.price, c.country, c.city, c.hotelname, c.img from users AS a INNER JOIN orders AS b ON a.Email = b.userEmail INNER JOIN hotels AS c ON c.id = b.hotelid WHERE a.Email = '"+email+"'");

		while (rsjoin.next()) {
			Map<String, Object> hotelDetails = new HashMap<>();
			hotelDetails.put("orderId", rsjoin.getString("b.id"));
			hotelDetails.put("hotelId", rsjoin.getString("c.id"));
			hotelDetails.put("personalNumber", rsjoin.getString("a.personalNumber"));
			hotelDetails.put("phoneNumber", rsjoin.getString("a.phoneNumber"));
			hotelDetails.put("firstName", rsjoin.getString("a.firstName"));
			hotelDetails.put("lastName", rsjoin.getString("a.lastName"));
			hotelDetails.put("fromDate", rsjoin.getString("b.fromdate"));
			hotelDetails.put("toDate", rsjoin.getString("b.todate"));
			hotelDetails.put("quantity", rsjoin.getString("b.quantity"));
			hotelDetails.put("fullAmount", rsjoin.getString("b.fullamount"));
			hotelDetails.put("orderDate", rsjoin.getString("b.orderdate"));
			hotelDetails.put("price", rsjoin.getString("c.price"));
			hotelDetails.put("country", rsjoin.getString("c.country"));
			hotelDetails.put("city", rsjoin.getString("c.city"));
			hotelDetails.put("hotelName", rsjoin.getString("c.hotelname"));
			hotelDetails.put("img", rsjoin.getString("c.img"));
			hotelsList.add(hotelDetails);
		}

		return hotelsList;
	}
}
