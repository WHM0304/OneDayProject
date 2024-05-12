package com.callor.hello.service.impl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.callor.hello.dao.GalleryDao;
import com.callor.hello.dao.ImagesDao;
import com.callor.hello.models.GalleryVO;
import com.callor.hello.models.ImageVO;
import com.callor.hello.service.FileUploadService;
import com.callor.hello.service.GalleryService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class GalleryServiceImpl implements GalleryService{
	
	private final GalleryDao galleryDao;
	private final ImagesDao imageDao;
	private final FileUploadService fileUploadService;
	
	

	public GalleryServiceImpl(GalleryDao galleryDao, ImagesDao imageDao, FileUploadService fileUploadService) {
		super();
		this.galleryDao = galleryDao;
		this.imageDao = imageDao;
		this.fileUploadService = fileUploadService;
	}




	@Autowired
	public void create_table() {
		galleryDao.create_table(null);
		imageDao.create_table("");
	}
	
	
	
	@Override
	public List<ImageVO> findById(String s_id) {
		
		return imageDao.findById(s_id);
	}

	@Override
	public List<ImageVO> selectImageAll() {
		
		return imageDao.selectAll();
	}

	@Override
	public List<GalleryVO> selectAll() {
		return galleryDao.selectAll();
		
	}

	@Override
	public GalleryVO createGallery(GalleryVO galleryVO, MultipartFile image_file) throws Exception {
		galleryVO.setS_origin_image(image_file.getOriginalFilename());
		String fileName = fileUploadService.fileUpload(image_file);
		galleryVO.setS_up_image(fileName);
		setGalleryOptions(galleryVO);
		log.debug("ㅇㅁ나ㅣㅇㅁ나ㅣㅇㅁ나ㅣㅇㅁ나ㅣ;ㅇㅁㄴ아ㅣ ----{}",galleryVO);
		int ret = galleryDao.insert(galleryVO);
		if(ret >0) {
			return galleryVO;
		}
		return null;
	}

	@Override
	public List<GalleryVO> createGallery(GalleryVO galleryVO, MultipartHttpServletRequest image_files)
			throws Exception {
		
		setGalleryOptions(galleryVO);
		galleryVO.setS_origin_image("");
		galleryVO.setS_up_image("");
		
		int sRet = galleryDao.insert(galleryVO);
		String i_sid = galleryVO.getS_id();
		log.debug("------------------------{}",galleryVO);
		List<ImageVO> resultNames = fileUploadService.filesUpload(image_files);
		int iret = imageDao.inserts(i_sid, resultNames);
		
		return null;
	}
	
	private void setGalleryOptions(GalleryVO vo) {
		LocalDateTime lt = LocalDateTime.now();
		DateTimeFormatter date = DateTimeFormatter.ofPattern("YYYY-MM-dd");
		DateTimeFormatter time = DateTimeFormatter.ofPattern("HH:mm:ss");
		vo.setS_id(UUID.randomUUID().toString());
		vo.setS_date(lt.format(date));
		vo.setS_time(lt.format(time));
		
	}









}
