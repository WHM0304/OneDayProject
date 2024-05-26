package com.nemo.hello.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateVO {
	
	
	private String p_id;
	private int p_num;
	private int p_row_num;
	private String p_block_name;
	private Integer p_block_value;

}
