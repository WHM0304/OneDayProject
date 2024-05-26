package com.nemo.hello.dao;

import java.util.List;

import com.nemo.hello.models.SpeechVO;

public interface SpeechDao {
	public List<SpeechVO> selectByNNum(int sNum);
	public List<SpeechVO> selectAll();
}
