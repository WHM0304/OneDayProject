package com.nemo.hello.service.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nemo.hello.dao.UserDao;
import com.nemo.hello.models.UserVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service("authProviderImpl")
public class AuthProviderImpl implements AuthenticationProvider{
	
	
	
	private final PasswordEncoder passwordEncoder;
	private final UserDao userDao;
	
	public AuthProviderImpl(
			@Qualifier("passEncoderV1") PasswordEncoder passwordEncoder, UserDao userDao) {
		this.passwordEncoder = passwordEncoder;
		this.userDao = userDao;
		
	}

	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String m_id = authentication.getName();
		String m_pw = authentication.getCredentials().toString();
		
		UserVO userVO = userDao.findById(m_id);
		log.debug("로그인한 사용자 정보 {} , {} " , m_id, m_pw);
		if(userVO == null) {
			
			
			throw new UsernameNotFoundException(String.format
					("USERNAME 확인 : %s는 없음", m_id));
		}
		
		
		boolean passOK = passwordEncoder.matches( m_pw,userVO.getM_pw());
		
		
		
		if(!passOK) {
			throw new BadCredentialsException("비밀번호를 확인하세요");
		}
		
		
		
		
		List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
		
		
			grantList.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		
		
		Authentication token 
		= new UsernamePasswordAuthenticationToken(userVO,m_id, grantList);
		
		
		return token;
		
		
		
		
		
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return true;
	}

}
