package mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Hotels extends StartMysql {
	Statement s;

	public Hotels() throws SQLException {
		this.s = startConnection();
	}

	public List<Map<String, Object>> hotels() throws SQLException {
		List<Map<String, Object>> hotelsList = new ArrayList<>();
		ResultSet rsjoin = s.executeQuery(
				"SELECT a.id, a.hotelName, a.country, a.city, a.price, a.avaliable, a.img FROM hotel.hotels as a");

		while (rsjoin.next()) {
			Map<String, Object> hotelDetails = new HashMap<>();
			hotelDetails.put("hotelId", rsjoin.getString("a.id"));
			hotelDetails.put("hotelName", rsjoin.getString("a.hotelName"));
			hotelDetails.put("country", rsjoin.getString("a.country"));
			hotelDetails.put("city", rsjoin.getString("a.city"));
			hotelDetails.put("price", rsjoin.getString("a.price"));
			hotelDetails.put("avaliable", rsjoin.getBoolean("a.avaliable"));
			hotelDetails.put("img", rsjoin.getString("a.img"));
			hotelsList.add(hotelDetails);
		}

		return hotelsList;
	}
}
