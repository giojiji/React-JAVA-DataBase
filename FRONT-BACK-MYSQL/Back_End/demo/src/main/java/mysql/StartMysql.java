package mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class StartMysql {
	
	public Statement startConnection() throws SQLException {
		String host = "localhost";
		String port = "3306";
		Connection con = DriverManager.getConnection(
				"jdbc:mysql://" + host + ":" + port + "/hotel?autoReconnect=true&useSSL=false", "root", "16Maisi1996@");
		Statement s = con.createStatement();
		return s;
	}
	


}

