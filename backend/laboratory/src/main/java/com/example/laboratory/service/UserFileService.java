package com.example.laboratory.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.laboratory.entity.UserFile;
import com.example.laboratory.repository.UserFileRepository;


@Service
public class UserFileService {

	@Autowired
	private UserFileRepository userFileRepository;
	
	public String saveImage(MultipartFile file, String name , String email) throws IOException {
		UserFile userFile = new UserFile();
		
		userFile.setName(name);
		userFile.setEmail(email);
		userFile.setImage(file.getBytes());
		
		userFileRepository.save(userFile);
		
		return"Image Saved in Database";
		
	}
	
	public Optional<UserFile> getUserByEmail(String email) {
        return userFileRepository.findByEmail(email);
    }
}
