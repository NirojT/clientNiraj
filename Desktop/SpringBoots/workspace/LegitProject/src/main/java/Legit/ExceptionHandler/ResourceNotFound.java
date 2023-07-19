package Legit.ExceptionHandler;

public class ResourceNotFound extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	String resourceName;
	String fieldName;
	long fieldValue;
	
	
	public ResourceNotFound(String resourceName, String fieldName, long fieldValue) {
		super(resourceName+" not found with "+fieldName+" :"+fieldValue);
		//super (String.format("%s not found with %s :%s" ,resourceName,fieldName,fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}

}
