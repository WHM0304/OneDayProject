package com.nemo.hello.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.hello.dao.ClearDao;
import com.nemo.hello.dao.GameDao;
import com.nemo.hello.dao.PlayerDao;
import com.nemo.hello.models.ClearVO;
import com.nemo.hello.models.GameVO;
import com.nemo.hello.models.PlayerVO;
import com.nemo.hello.models.UpdateVO;
import com.nemo.hello.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/game")
public class GameController {
	private final GameDao gameDao;
	private final PlayerDao playerDao;
	private final ClearDao clearDao;
	private final UserService userService;

	public GameController(GameDao gameDao, PlayerDao playerDao, ClearDao clearDao, UserService userService) {
		super();
		this.gameDao = gameDao;
		this.playerDao = playerDao;
		this.clearDao = clearDao;
		this.userService = userService;
	}

	@RequestMapping(value = "/{LEVEL}", method = RequestMethod.GET)
	public String game(Model model, @PathVariable(name = "LEVEL", required = false) String LEVEL) {

		String p_num = LEVEL;

		String p_id = userService.getLoginUid();

//		String p_id = "1";
		List<GameVO> game = gameDao.selectAll(p_num);

		List<PlayerVO> player = playerDao.selectAll(p_id, p_num);
		try {
			playerDao.insert(p_id, p_num);
		} catch (Exception e) {
			// TODO: handle exception
		}
		model.addAttribute("STEP", game);
		model.addAttribute("PLAY", player);
		String output = null;
		if (LEVEL.equals("1")) {
			output = "first";
//			log.debug("asdaskdpiowqkpodqkwpodqwkopd : {}",LEVEL);
		} else if (LEVEL.equals("2")) {
			output = "second";
		} else if (LEVEL.equals("3")) {
			output = "third";
		} else if (LEVEL.equals("4")) {
			output = "fourth";
		} else if (LEVEL.equals("5")) {
			output = "last";
		}
		log.debug("asdaskdpiowqkpodqkwpodqwkopd : {}", LEVEL);
		return "game-form/" + output + "/game";
	}

	@RequestMapping(value = "/{LEVEL}", method = RequestMethod.POST)
	public String game(UpdateVO vo, @PathVariable(name = "LEVEL", required = false) String LEVEL) {

		String p_id = userService.getLoginUid();
//		String p_id = "1";
		vo.setP_id(p_id);

		log.debug("dd : {}", vo);
		int result = playerDao.update(vo);
//		int result = playerDao.update(vo); 
		return "redirect:/game/{LEVEL}";
//		return "game-form/first/game";

	}

	@RequestMapping(value = "/reset/{p_num}/{p_row_num}", method = RequestMethod.GET)
	public String reset(Model model,  @PathVariable(name = "p_num", required = false) String p_num) {

		String p_id = userService.getLoginUid();
//		String p_id = "1";
//		vo.setP_id(p_id);
		log.debug(" VO ---------=-=-=-=-=-=:{} ,{}", p_num, p_id);
			try {
				
				int reset = playerDao.reset(p_id, p_num);
			} catch (Exception e) {
				// TODO: handle exception
			}
			
		

		try {
			playerDao.insert(p_id, p_num);

		} catch (Exception e) {
			// TODO: handle exception
		}

		log.debug("확인좀해봅시다 --{} -- {}", p_id, p_num);
		return "redirect:/game/{p_num}";
//		return null;
//		return "game-form/first/game";
	}
	
	
	
	// 클리어 화면
	@RequestMapping(value="/clear/{p_num}", method = RequestMethod.GET)
	public String clear(Model model, ClearVO clearVO, @PathVariable(name = "p_num", required = false) Integer p_num) {
		
		String p_id = userService.getLoginUid();
		clearVO.setC_id(p_id);
		clearVO.setC_clear(1);
		
		// 클리어데이터를 만들고
		clearVO.setC_level(p_num);
		clearDao.insert(clearVO);
		
		
		// 클리어기록에따라 그림보이게
		for(int i=1 ; i<=5 ; i++) {
			clearVO.setC_level(i);
			ClearVO clearData =  clearDao.findByRow(clearVO);
			
			    model.addAttribute("clear_data" + i , clearData);
		}
		
		
		return "clear";
	}

}
