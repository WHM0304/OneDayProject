package com.callor.hello.dao;

import com.callor.hello.models.GalleryVO;

public interface GalleryDao extends GenericDao<GalleryVO, String>{
	
	
	public GalleryVO findById(String pk);

}
