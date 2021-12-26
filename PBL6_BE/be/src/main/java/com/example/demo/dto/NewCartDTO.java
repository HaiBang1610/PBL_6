package com.example.demo.dto;

import java.util.List;

public class NewCartDTO {

	private String name;
	private String address;
	private String phone;
	private String gmail;
	private String note;
	private List<CartItemDTO> cartItemDTOs;

	public NewCartDTO() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getGmail() {
		return gmail;
	}

	public void setGmail(String gmail) {
		this.gmail = gmail;
	}

	public List<CartItemDTO> getCartItemDTOs() {
		return cartItemDTOs;
	}

	public void setCartItemDTOs(List<CartItemDTO> cartItemDTOs) {
		this.cartItemDTOs = cartItemDTOs;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
