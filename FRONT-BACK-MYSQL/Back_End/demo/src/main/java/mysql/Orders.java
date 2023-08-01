package mysql;

import java.sql.SQLException;
import java.sql.Statement;

public class Orders extends StartMysql {
	Statement s;

	public Orders() throws SQLException {
		this.s = startConnection();
	}
	
	public boolean newOrder(String email, String id, String fromDate, String toDate, String price, String quantity, String fullAmount) throws SQLException {

			s.executeUpdate(
					"INSERT INTO orders (userEmail, hotelId, fromDate, toDate, price, quantity, fullAmount, orderDate) VALUES ('"+email+"', '"+id+"', '"+fromDate+"', '"+toDate+"', '"+price+"', '"+quantity+"','"+fullAmount+"', curdate());");
			return true;}

	public boolean deleteOrder(String email, String id, String orderId) throws SQLException {

		s.executeUpdate("Delete from orders where hotelid = "+id+" and userEmail = '"+email+"' and id = '"+orderId+"'");
		return true;}
}

