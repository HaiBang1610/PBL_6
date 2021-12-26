package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.BillDTO;
import com.example.demo.dto.NewCartDTO;
import com.example.demo.model.Bill;

public interface BillService {

	void saveCart(NewCartDTO newCartDTO);

	void save(Bill bill);

	Bill findById(Long id);

	List<Bill> findAllBillById_User(Long id);

	List<BillDTO> getAllBills();
}
