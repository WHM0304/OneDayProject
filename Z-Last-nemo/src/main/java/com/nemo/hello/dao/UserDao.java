package com.nemo.hello.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.nemo.hello.models.UserVO;

public interface UserDao {
	
	
	@Select(" SELECT * FROM tbl_members ORDER BY m_id ")
	public List<UserVO> selectAll();
	
	@Select(" SELECT * FROM tbl_members WHERE m_id = #{m_id} ")
	public UserVO findById(String m_id);
	public int insert(UserVO userVO);
	public int update(UserVO userVO);
	public int delete(String username);

	
	
	public void create_user_table(String dumy);
	

}
