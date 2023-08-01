package mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AddUser extends StartMysql {
	Statement s;

	public AddUser() throws SQLException {
		this.s = startConnection();
	}
	
	public boolean newUser(String email, String password, String firstName, String lastName, String personalNumber, String phoneNumber) throws SQLException {
		ResultSet rsjoin = s.executeQuery(
				"SELECT a.Email FROM hotel.users AS a WHERE a.Email = '" + email + "'");
		if (rsjoin.next()) {
			return false;
		} else {
			s.executeUpdate(
					"INSERT INTO hotel.users (Email, password, FirstName, LastName, personalNumber, phoneNumber, RegistrationDate) VALUES ('"+email+"', '"+password+"', '"+firstName+"', '"+lastName+"', '"+personalNumber+"', '"+phoneNumber+"', curdate());");
			return true;

		}

	}
}

