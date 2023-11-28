package com.example.laboratory.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.laboratory.entity.UserFile;


@Repository
public interface UserFileRepository extends JpaRepository<UserFile, Long> {
	
	Optional<UserFile> findByEmail(String email);
	
	

}
