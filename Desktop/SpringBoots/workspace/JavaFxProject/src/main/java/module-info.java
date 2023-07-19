module Apps.JavaFxProject {
    requires javafx.controls;
    requires javafx.fxml;

    opens Apps.JavaFxProject to javafx.fxml;
    exports Apps.JavaFxProject;
}
