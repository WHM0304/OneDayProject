package com.nemo.hello.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.hello.dao.ClearDao;
import com.nemo.hello.dao.SpeechDao;
import com.nemo.hello.models.ClearVO;
import com.nemo.hello.models.SpeechVO;
import com.nemo.hello.service.UserService;


/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private final SpeechDao speechDao;
	private final ClearDao clearDao;
	private final UserService userService;
	
	public HomeController(SpeechDao speechDao, ClearDao clearDao, UserService userService) {
		this.speechDao = speechDao;
		this.clearDao = clearDao;
		this.userService = userService;
	}




	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Model model, ClearVO clearVO) {
		
        LocalDate now = LocalDate.now();
        int year = now.getYear();
        int month = now.getMonthValue();
        int day = now.getDayOfMonth();

        List<SpeechVO> speechList = speechDao.selectAll();
//		List<SpeechVO> speechList = speechDao.selectByNNum(1);

        // 모델에 날짜와 대화 데이터 추가
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("day", day);
        
        model.addAttribute("SPEECH", speechList);
        model.addAttribute("BODY", "HOME");
        
        
        
        
        for(int i=1 ; i<=5 ; i++) {
        	try {
        		String p_id = userService.getLoginUid();
        		clearVO.setC_id(p_id);
				
			} catch (Exception e) {
				
				String id = "11";
				clearVO.setC_id(id);
			}
    		
//    		clearVO.setC_id("11");
        	clearVO.setC_clear(1);
			clearVO.setC_level(i);
			ClearVO clearData =  clearDao.findByRow(clearVO);
			
			    model.addAttribute("clear_data" + i , clearData);
			// 클리어정보 1~5에 따라 그림다르게
		}

        return "layout";
	}
	
}
