package com.nemo.hello.dao;

import com.nemo.hello.models.ClearVO;

public interface ClearDao {

	// 스테이지 클리어했는지 확인하는용
	public ClearVO findByRow(ClearVO vo);
	
	// 클리어정보 생성용
	public int insert(ClearVO vo);

}
