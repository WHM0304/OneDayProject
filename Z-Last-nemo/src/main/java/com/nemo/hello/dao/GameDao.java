package com.nemo.hello.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.nemo.hello.models.GameVO;

public interface GameDao {
	
	@Select(" SELECT * FROM tbl_nemo WHERE n_num = #{n_num} ")
	public List<GameVO> selectAll( String n_num);

}
