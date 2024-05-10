package com.callor.hello.models;

import groovy.transform.ToString;
import groovy.transform.builder.Builder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GalleryVO {
	private String s_id;
	private String s_email;
	private String s_password;
	private String s_date;
	private String s_time;
	private String s_subject;
	private String s_content;
	private String s_origin_image;
	private String s_up_image;

}
