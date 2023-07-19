package Legit.helper;

public class UserFoundException extends Exception{

	
	public UserFoundException() {
		super("User with this username is already in db");
		// TODO Auto-generated constructor stub
	}

	

	public UserFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
}
