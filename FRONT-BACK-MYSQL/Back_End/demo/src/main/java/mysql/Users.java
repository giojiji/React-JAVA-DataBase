package mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

public class Users extends StartMysql {
	Statement s;
	Map<String, Object> validCredentials;
	
	public Users() throws SQLException {
		this.s = startConnection();
	}
	
	public Map<String, Object> selectUser(String email, String password) throws SQLException {
		ResultSet rsjoin = s.executeQuery(
				"SELECT a.Email, a.password FROM hotel.users AS a WHERE a.Email = '" + email + "' AND a.password = '" + password + "'");
		if (rsjoin.next()) {
			validCredentials = new HashMap<>();
			validCredentials.put("email", rsjoin.getString("a.Email"));
			validCredentials.put("password", rsjoin.getString("a.password"));
			return validCredentials;
		} else {
			validCredentials = new HashMap<>();
			validCredentials.put("email", "wrongEmail");
			validCredentials.put("password", "wrongEmail");
			return validCredentials;
		}


	}
}
