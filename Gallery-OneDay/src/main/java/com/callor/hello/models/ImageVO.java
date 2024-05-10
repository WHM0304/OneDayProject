package com.callor.hello.models;

import groovy.transform.ToString;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ImageVO {
	
	private String i_id;
	private String i_sid;
	private String i_origin_image;
	private String i_up_image;

}
