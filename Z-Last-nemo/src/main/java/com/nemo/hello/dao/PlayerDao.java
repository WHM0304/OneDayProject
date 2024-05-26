package com.nemo.hello.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.nemo.hello.models.PlayerVO;
import com.nemo.hello.models.UpdateVO;

public interface PlayerDao {
	
	@Select(" SELECT * FROM tbl_nemo_play WHERE p_id=#{p_id} AND p_num = #{p_num} ")
	public List<PlayerVO> selectAll(@Param("p_id") String p_id,@Param("p_num") String p_num);

	
	
	public int update(UpdateVO vo);


	
	public int delete(PlayerVO vo);






	public int reset(@Param("p_id") String p_id,@Param("p_num") String p_num);



	public int insert(@Param("p_id")String p_id,@Param("p_num") String p_num);
	

}
