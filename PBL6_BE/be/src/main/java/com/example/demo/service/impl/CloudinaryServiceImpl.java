package com.example.demo.service.impl;

import java.io.IOException;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.demo.service.CloudinaryService;

@Service
@Transactional
public class CloudinaryServiceImpl implements CloudinaryService {

	@Autowired
	private Cloudinary cloudinaryConfig;

	public String uploadFile(MultipartFile file) {

		

		try {

			byte[] uploadedFile = file.getBytes();
			

			Map uploadResult = cloudinaryConfig.uploader().upload(uploadedFile, ObjectUtils.emptyMap());

			return uploadResult.get("url").toString();

		} catch (Exception e) {

			throw new RuntimeException(e);
		}
	}

	@Override
	public void deleteFile(String publicId) {

		try {

			cloudinaryConfig.uploader().destroy(publicId, ObjectUtils.emptyMap());

		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

}
