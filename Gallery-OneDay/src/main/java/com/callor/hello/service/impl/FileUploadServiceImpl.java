package com.callor.hello.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.callor.hello.models.ImageVO;
import com.callor.hello.service.FileUploadService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileUploadServiceImpl implements FileUploadService{
	
	private final String folder;
	
	private final ServletContext context;
	

	public FileUploadServiceImpl(ServletContext context) {
		super();
		this.context = context;
		folder = "/app/file/upload";
	}

	@Override
	public String fileUpload(MultipartFile file) throws Exception {
		String originalName = file.getOriginalFilename();
		log.debug("!!!!!!!!!!!!!!!!!!!!{}",originalName);
		if(originalName.isEmpty()) {
			return null;
		}
		File path = new File(folder);
		if(!path.exists()) {
			path.mkdirs();
		}
		
		String uuid = UUID.randomUUID().toString();
		String upLoadFileName = String.format("%s-%s", uuid,originalName);
		File upLoadFile = new File(folder,upLoadFileName);
		file.transferTo(upLoadFile);
		return upLoadFileName;
	}

	@Override
	public List<ImageVO> filesUpload(MultipartHttpServletRequest files) throws Exception {
		List<MultipartFile> result = files.getFiles("image_files");
		List<ImageVO> resultFileImages = new ArrayList<>();
		for(MultipartFile f : result) {
			String resName = this.fileUpload(f);
			resultFileImages.add(
					ImageVO.builder()
						.i_id(UUID.randomUUID().toString())
						.i_origin_image(f.getOriginalFilename())
						.i_up_image(resName).build()
					);
		}
		return resultFileImages;
	}

}
