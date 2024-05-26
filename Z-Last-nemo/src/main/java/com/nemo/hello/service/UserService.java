package com.nemo.hello.service;

import com.nemo.hello.models.UserVO;

public interface UserService {

	public UserVO createUser(UserVO createUserVO);

	public UserVO findById(String username);

	String getLoginUid();

}
