package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;

@Configuration
public class AppConfig {

	@Value("${CLOUDINARY_URL}")
	private String cloudinaryUrl;

	@Bean
	public Cloudinary cloudinaryConfig() {

		return new Cloudinary(cloudinaryUrl);
	}
}
