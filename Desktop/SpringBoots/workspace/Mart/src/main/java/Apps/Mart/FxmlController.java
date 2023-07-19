package Apps.Mart;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.Hyperlink;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class FxmlController {
	@FXML
	private AnchorPane admin_form;

	@FXML
	private Hyperlink admin_hyperlink;

	@FXML
	private Button admin_loginBtn;

	@FXML
	private PasswordField admin_password;

	@FXML
	private TextField admin_username;

	@FXML
	private AnchorPane employee_form;

	@FXML
	private Hyperlink employee_hyperlink;

	@FXML
	private TextField employee_id;

	@FXML
	private Button employee_loginBtn;

	@FXML
	private PasswordField employee_password;

	@FXML
	private AnchorPane main_form;

	// closing "x"
	public void close() {
		System.exit(0);
	}
	// form switching admin < > staff

	public void switchForm(ActionEvent event) {
		if (event.getSource() == admin_hyperlink) {
			admin_form.setVisible(false);
			employee_form.setVisible(true);

		} else if (event.getSource() == employee_hyperlink) {
			employee_form.setVisible(false);
			admin_form.setVisible(true);
		}

	}

	// database tools
	private Connection connection;
	private ResultSet resultSet;
	private PreparedStatement preparedStatement;

	public void adminLogin() {
		String q = "Select * from admin Where username=? and password=?";
		connection = Database.connectDB();
		
		try {
			Alert alert;

			if (admin_username.getText().isEmpty() || admin_password.getText().isEmpty()) {
				alert = new Alert(AlertType.ERROR);
				alert.setTitle("Error Message");
				alert.setHeaderText(null);
				alert.setContentText("please fill all the fields");
				alert.showAndWait();
			} else {

				preparedStatement = connection.prepareStatement(q);
				preparedStatement.setString(1, admin_username.getText());
				preparedStatement.setString(2, admin_password.getText());
				resultSet = preparedStatement.executeQuery();
				if (resultSet.next()) {
					// go to dashbord
					
					alert = new Alert(AlertType.INFORMATION);
					alert.setTitle("Information Message");
					alert.setHeaderText(null);
					alert.setContentText("Successfully Login!..");
					alert.showAndWait();

					admin_loginBtn.getScene().getWindow().hide();// hide loginbtn
					Parent root = FXMLLoader.load(getClass().getResource("adminDashboard.fxml"));
					Stage stage = new Stage();
					
					Scene scene = new Scene(root);
					stage.setScene(scene);
					
					stage.show();
				} else {
					// error message
					alert = new Alert(AlertType.ERROR);
					alert.setTitle("Error Message");
					alert.setHeaderText(null);
					alert.setContentText("invalid name or password");
					alert.showAndWait();
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	
	public void employeeLogin() {
		String q = "Select * from employee Where employee_id=? and password=?";
		connection = Database.connectDB();
		
		try {
			Alert alert;
			
			if (employee_id.getText().isEmpty() || employee_password.getText().isEmpty()) {
				alert = new Alert(AlertType.ERROR);
				alert.setTitle("Error Message");
				alert.setHeaderText(null);
				alert.setContentText("please fill all the fields");
				alert.showAndWait();
			} else {
				
				preparedStatement = connection.prepareStatement(q);
				preparedStatement.setString(1, employee_id.getText());
				preparedStatement.setString(2, employee_password.getText());
				resultSet = preparedStatement.executeQuery();
				if (resultSet.next()) {
					// go to dashbord
					
					alert = new Alert(AlertType.INFORMATION);
					alert.setTitle("Information Message");
					alert.setHeaderText(null);
					alert.setContentText("Successfully Login!..");
					alert.showAndWait();
					
					employee_loginBtn.getScene().getWindow().hide();// hide loginbtn
					Parent root = FXMLLoader.load(getClass().getResource("employeeDashboard.fxml"));
					Stage stage = new Stage();
					
					Scene scene = new Scene(root);
					stage.setScene(scene);
					
					stage.show();
				} else {
					// error message
					alert = new Alert(AlertType.ERROR);
					alert.setTitle("Error Message");
					alert.setHeaderText(null);
					alert.setContentText("invalid name or password");
					alert.showAndWait();
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}
