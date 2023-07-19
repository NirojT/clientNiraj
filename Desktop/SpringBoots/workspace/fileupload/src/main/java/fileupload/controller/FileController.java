package fileupload.controller;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/files")
public class FileController {
	@PostMapping("/upload")
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
		// Check if the file is empty
		if (file.isEmpty()) {
			throw new RuntimeException("File is empty");
		}

		// Get the file name and content type
		String fileName = file.getOriginalFilename();
		String contentType = file.getContentType();

		// Read the file content
		byte[] data = file.getBytes();

		// Save the file to the server
		String filePath = "C:/uploads/" + fileName;
		FileUtils.writeByteArrayToFile(new File(filePath), data);

		// Return a success message
		return ResponseEntity.ok("File uploaded successfully");

	}
	

}

