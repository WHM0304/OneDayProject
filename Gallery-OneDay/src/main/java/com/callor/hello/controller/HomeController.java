package com.callor.hello.controller;

import java.util.List;
import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.hello.models.GalleryVO;
import com.callor.hello.models.ImageVO;
import com.callor.hello.service.GalleryService;

import lombok.extern.slf4j.Slf4j;

/**
 * Handles requests for the application home page.
 */
@Slf4j
@Controller
public class HomeController {
	GalleryService galleryService;
	
	
	
	public HomeController(GalleryService galleryService) {
		super();
		this.galleryService = galleryService;
	}


	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		List<GalleryVO> gList = galleryService.selectAll();
		
		
		String s_id = gList.get(0).getS_id();
		List<ImageVO> iList = galleryService.findById(s_id);
		
		log.debug("-------------------------------------------------{}",gList);
		model.addAttribute("GALLERYS",gList);
		model.addAttribute("IMAGES",iList);
		
		
		return "home";
	}
	
}
