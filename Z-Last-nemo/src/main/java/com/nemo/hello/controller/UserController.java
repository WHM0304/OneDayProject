package com.nemo.hello.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nemo.hello.models.UserVO;
import com.nemo.hello.service.UserService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
@RequestMapping(value="/user")
public class UserController {
	
	
	private final UserService userService;
	
	
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}







	@RequestMapping(value="/join" , method=RequestMethod.GET)
	public String join(Model model) {
		model.addAttribute("BODY" , "JOIN");
		return "layout";
	}
	
	@RequestMapping(value="/join" , method=RequestMethod.POST)
	public String join(UserVO VO) {
		
		UserVO ret = userService.createUser(VO);
		return "redirect:/";
	}
	
	@RequestMapping(value="/login" , method=RequestMethod.GET)
	public String login(Model model) {
		model.addAttribute("BODY","LOGIN");
		return "layout";
	}
	
	
	
	
	
	
	@ResponseBody
	@RequestMapping(value="/idcheck/{m_id}")
	public String idCheck(@PathVariable("m_id") String m_id) {
		UserVO vo = userService.findById(m_id);
		log.debug("aksdaskdaslkdmsalkd-- {}",m_id);
		if(vo == null)return "OK";
		return null;
		
	}
	

}
