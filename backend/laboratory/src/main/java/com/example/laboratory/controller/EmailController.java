package com.example.laboratory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.laboratory.entity.ContactInfo;
import com.example.laboratory.service.EmailService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmailController {
	
	@Autowired
	private EmailService emailService;
	
	//@CrossOrigin(origins = "http://localhost:4200/")
	@GetMapping("/hello")
	public String sayHello(){
		return "hellllooo";
	}
	
	@CrossOrigin(origins = "http://localhost:4200/") 
    @PostMapping("/sendmail")
    public ResponseEntity<Boolean> sendContactEmail(@RequestBody ContactInfo contactInfo) {
        try {
            String subject = "New Contact Message from " + contactInfo.getName();
            String message = "Name: " + contactInfo.getName() + 
            		         "\n Number: " + contactInfo.getNumber() + 
            		         "\n Email: " + contactInfo.getEmail();
           boolean messageSent = emailService.sendEmail("imadyasin07@gmail.com", subject, message);
            return ResponseEntity.ok(messageSent);
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
        
    }

}
