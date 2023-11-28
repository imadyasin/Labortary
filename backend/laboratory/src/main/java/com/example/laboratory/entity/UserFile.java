package com.example.laboratory.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="files")
public class UserFile {
	
	@Id
	@Column(name="userId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="image")
	@Lob
	private byte[] image;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public UserFile(Long userId, String name, String email, byte[] image) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.image = image;
	}

	@Override
	public String toString() {
		return "UserFile [userId=" + userId + ", name=" + name + ", email=" + email + ", image="
				+ Arrays.toString(image) + "]";
	}

	public UserFile() {
		super();
	}
	
	
	
	

	
}
