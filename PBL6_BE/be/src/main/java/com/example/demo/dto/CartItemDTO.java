package com.example.demo.dto;

public class CartItemDTO {

	private int itemId;
	private int quantity;

	public CartItemDTO() {
		super();
	}

	public CartItemDTO(int itemId, int quantity) {
		super();
		this.itemId = itemId;
		this.quantity = quantity;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
