package com.callor.hello.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.callor.hello.models.GalleryVO;
import com.callor.hello.service.GalleryService;

@Controller
@RequestMapping(value="/gallery")
public class GalleryController {
	
	private final GalleryService galleryService;
	
	
	
	
	public GalleryController(GalleryService galleryService) {
		super();
		this.galleryService = galleryService;
	}




	@RequestMapping(value="/insert" , method=RequestMethod.GET)
	public String insert() {
		return "gallery/insert";
		
	}
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public String insert(GalleryVO galleryVO,
			@RequestParam("image_file") MultipartFile image_file,
			MultipartHttpServletRequest image_files,
			Model model
			) {
		String singleFimeName = image_file.getOriginalFilename();
		GalleryVO resultVO = null;
		try {
			if(singleFimeName.isEmpty()) {
				resultVO = galleryService.createGallery(galleryVO, image_file);
			}
			if(image_files.getFiles("image_files").size()>0) {
				List<GalleryVO> VOs = galleryService.createGallery(galleryVO, image_files);
			}
			model.addAttribute("Gallery",resultVO);
		} catch (Exception e) {
			
		}
		model.addAttribute("IMAGE", image_file.getOriginalFilename());
		return "gallery/insert";
	}

}
