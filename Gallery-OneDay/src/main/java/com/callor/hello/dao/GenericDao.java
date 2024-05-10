package com.callor.hello.dao;

import java.util.List;

public interface GenericDao<VO,PK> {
	
	
	public List<VO> selectAll();
	public VO findById(PK pk);
	
	public int insert(VO vo);
	public int update(VO vo);
	public int delete(PK pk);
	
	public void create_table(String dumy);

}
