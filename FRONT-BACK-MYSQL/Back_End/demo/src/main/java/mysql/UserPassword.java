package mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class UserPassword extends StartMysql {
	Statement s;

	public UserPassword() throws SQLException {
		this.s = startConnection();
	}
	
	public boolean newUser(String email, String personalNumber, String phoneNumber, String password) throws SQLException {
		ResultSet rsjoin = s.executeQuery(
				"SELECT a.Email, a.personalNumber, a.phoneNumber FROM HOTEL.USERS as a WHERE a.Email = '" + email + "'");
		if (rsjoin.next() && rsjoin.getString("a.personalNumber").equals(personalNumber) && rsjoin.getString("a.phoneNumber").equals(phoneNumber )) {
			s.executeUpdate(
					"UPDATE HOTEL.USERS SET password = '"+password+"' WHERE Email = '"+email+"'");
			return  true;
		} else {
			return false;
		}

	}
}

