package Apps.JavaFxProject;

import java.io.IOException;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.Stage;

/**
 * JavaFX App
 */
public class App extends Application {

	//gui variables
    private static Scene scene;
    private GridPane gridPane=new GridPane();
    private BorderPane borderPane=new BorderPane();
    private Label title=new Label("Tic Tac Toe Game");
    private Button restartButton=new Button("Restart Button");
    Font font=Font.font("Roboto",FontWeight.BOLD,30);
    
    //0..8
    private Button[] buttons=new Button[9];
   
    
    //
    
    @Override
    public void start(Stage stage) throws IOException {
this.createGuI();
this.handleEvent();
        scene = new Scene(borderPane, 640, 480);
        stage.setScene(scene);
        stage.show();
    }

  
//creting gui
    private void createGuI() {
		//creting title
    	title.setFont(font);
    	
    	//creating restart button
    	restartButton.setFont(font);
    	borderPane.setTop(title);
    	borderPane.setBottom(restartButton);
    	BorderPane.setAlignment(title, Pos.CENTER);
    	BorderPane.setAlignment(restartButton, Pos.CENTER);
    borderPane.setPadding(new Insets(20,20,20,20));
    //working on 9 buttons
    int label=0;
    for(int i=0; i<3;i++) 
    {
    	for(int j=0; j<3;j++) {
    		Button button = new Button(label +"");
    		button.setId(label+"");
    		button.setFont(font);
    		button.setPrefWidth(150);
    		button.setPrefHeight(150);
    		gridPane.add(button, j, i);
    		gridPane.setAlignment(Pos.CENTER);
    		buttons[label]=button;
    		label++;
    	}
    }
   
		borderPane.setCenter(gridPane);
	}
//handle event
private void handleEvent() {
	restartButton.setOnAction(new EventHandler<ActionEvent>() {
		
		@Override
		public void handle(ActionEvent event) {
		System.out.println("restart clicked");
			
		}
	});
	
	for(Button button:buttons) {
		button.setOnAction(new EventHandler<ActionEvent>() {
			
			@Override
			public void handle(ActionEvent event) {
			Button currentButton =(Button) event.getSource();
			String id = currentButton.getId();
			int ids = Integer.parseInt(id);
			System.out.println("button clicked of id "+ids);
				
			}
		});
		}
}

	public static void main(String[] args) {
        launch();
    }

}