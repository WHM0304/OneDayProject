package com.callor.hello.dao;

import java.util.List;

import com.callor.hello.models.GalleryVO;
import com.callor.hello.models.ImageVO;

public interface GalleryDao extends GenericDao<GalleryVO, String>{
	
	
	
	public int insert(GalleryVO vo);

}
