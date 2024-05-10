package com.callor.hello.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.callor.hello.models.ImageVO;

public interface ImagesDao extends GenericDao<ImageVO, String>{
	
	
	public int inserts(
			@Param("s_id") String i_sid,@Param("images") List<ImageVO> resultnames);
			

}
