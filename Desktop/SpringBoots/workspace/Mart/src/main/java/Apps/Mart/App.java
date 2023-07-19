package Apps.Mart;

import java.io.IOException;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;


/**
 * JavaFX App
 */
public class App extends Application {

	private double x = 0;
	private double y = 0;

	@Override
	public void start(Stage stage) throws IOException {
		Parent root = FXMLLoader.load(getClass().getResource("FxmlDocument.fxml"));
		Scene scene = new Scene(root); // Create a new Scene
		root.setOnMousePressed((MouseEvent event) -> {
			event.getSceneX();
			event.getSceneY();

		});

		root.setOnMouseDragged((MouseEvent event) -> {
			stage.setX(event.getSceneX() - x);
			stage.setY(event.getSceneY() - y);
			stage.setOpacity(.8);

		});

		root.setOnMouseReleased((MouseEvent event) -> {
			stage.setOpacity(1);

		});

		stage.setScene(scene);
		stage.show();
	}

	public static void main(String[] args) {
		launch();

	}

}