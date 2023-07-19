package Apps.Mart;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database {

	public static Connection connectDB() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3307/mart", "root", "admin");
			return con;
		} catch (ClassNotFoundException e) {
			System.out.println("MySQL JDBC driver not found.");
		} catch (SQLException e) {
			System.out.println("Error connecting to the database: " + e.getMessage());
		}
		return null;
	}

}
