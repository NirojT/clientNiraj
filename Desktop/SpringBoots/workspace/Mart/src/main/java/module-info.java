module Apps.Mart {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.sql;
   

    opens Apps.Mart to javafx.fxml;
    exports Apps.Mart;
}
