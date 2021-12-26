package com.example.demo.dto;

import com.example.demo.model.Goods;

public class BillDetailDTO {

	private Goods goods;
	private double price;
	private int quantity;

	public BillDetailDTO() {

	}

	public BillDetailDTO(Goods goods, double price, int quantity) {
		super();
		this.goods = goods;
		this.price = price;
		this.quantity = quantity;
	}

	public Goods getGoods() {
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public double getTotal() {

		return this.price * this.quantity;
	}

}
