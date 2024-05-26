package com.nemo.hello.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nemo.hello.dao.UserDao;
import com.nemo.hello.models.UserVO;
import com.nemo.hello.service.UserService;


@Service
public class UserServiceImpl implements UserService{
	
	private final PasswordEncoder passwordEncoder;
	private final UserDao userDao;
	

	public UserServiceImpl(PasswordEncoder passwordEncoder, UserDao userDao) {
		super();
		this.passwordEncoder = passwordEncoder;
		this.userDao = userDao;
	}
	
	@Autowired
	public void create_table() {
		userDao.create_user_table(null);
		
	}


	@Override
	public UserVO createUser(UserVO createUserVO ) {
		
		String m_id = createUserVO.getM_id();
		String m_pw = createUserVO.getM_pw();
		List<UserVO> userList = userDao.selectAll();
		
		
		String encPw  = passwordEncoder.encode(m_pw);
		createUserVO.setM_pw(encPw);
		
		userDao.insert(createUserVO);
		
		return null;
	}

	@Override
	public UserVO findById(String m_id) {
		
		return userDao.findById(m_id);
	}
	@Override
	public String getLoginUid() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserVO userDetails = (UserVO) authentication.getPrincipal();
		String id = userDetails.getM_id().toString();
		return id;
	}
	
	

}
