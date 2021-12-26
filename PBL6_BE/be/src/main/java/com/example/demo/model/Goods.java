package com.example.demo.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Goods {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idGoods;
	private String goodsName;
	private double price;
	private long quantity;
	private int tradeMark;
	private double saleOff;
	private String image;
	private int favourite;
	private String description;
	private LocalDate createdDate;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "idCategory")
	@JsonIgnoreProperties("goodsCollection")
	private Category category;

	public Goods() {
		super();
	}

	public Goods(int i) {
		super();
		this.idGoods = i;
	}

	public Integer getIdGoods() {
		return idGoods;
	}

	public void setIdGoods(Integer idGoods) {
		this.idGoods = idGoods;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public int getTradeMark() {
		return tradeMark;
	}

	public void setTradeMark(int tradeMark) {
		this.tradeMark = tradeMark;
	}

	public double getSaleOff() {
		return saleOff;
	}

	public void setSaleOff(double saleOff) {
		this.saleOff = saleOff;
	}

	public double getPriceForSaleOff() {
		return this.price - (this.price * this.saleOff / 100);
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getFavourite() {
		return favourite;
	}

	public void setFavourite(int favourite) {
		this.favourite = favourite;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public void setIdCategory(long idCategory) {

		this.category = new Category(idCategory);
	}

	public long getIdCategory() {
		return this.category.getIdCategory();
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

}
