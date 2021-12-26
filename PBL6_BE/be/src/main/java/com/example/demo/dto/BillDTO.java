package com.example.demo.dto;

import java.util.List;

import com.example.demo.model.User;

public class BillDTO {

	private Long id;
	private String createdDate;
	private boolean status;
	private String name;
	private String address;
	private String phone;
	private String gmail;
	private String note;

	private List<BillDetailDTO> billDetails;
	// private User user;

	public BillDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
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

	public List<BillDetailDTO> getBillDetails() {
		return billDetails;
	}

	public void setBillDetails(List<BillDetailDTO> billDetails) {
		this.billDetails = billDetails;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public double getTotal() {

		return this.billDetails.stream().mapToDouble(ele -> ele.getTotal()).sum();
	}

}
