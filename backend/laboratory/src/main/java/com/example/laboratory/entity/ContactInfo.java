package com.example.laboratory.entity;

public class ContactInfo {
	
	private String name;
    private String number;
    private String email;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public ContactInfo(String name, String number, String email) {
		super();
		this.name = name;
		this.number = number;
		this.email = email;
	}
	public ContactInfo() {
		super();
	}
	public String getMessage() {
		
		return null;
	}
    
    
 

}
