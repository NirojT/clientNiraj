package Legit.helper;

public class UserNotFoundException  extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;



	public UserNotFoundException() {
		super("User with this username is not found in db");
		// TODO Auto-generated constructor stub
	}

	

	public UserNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	
	
}
