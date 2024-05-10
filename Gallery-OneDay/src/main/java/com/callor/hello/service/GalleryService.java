package com.callor.hello.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.callor.hello.models.GalleryVO;
import com.callor.hello.models.ImageVO;

public interface GalleryService {
	
	public List<GalleryVO> selectAll();
	
	public GalleryVO createGallery(GalleryVO galleryVO, MultipartFile image_file) throws Exception;
	
	public List<GalleryVO> createGallery(GalleryVO galleryVO, MultipartHttpServletRequest image_files) throws Exception;

	public List<ImageVO> findById(String s_id);

}
