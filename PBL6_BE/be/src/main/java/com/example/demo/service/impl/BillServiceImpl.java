package com.example.demo.service.impl;

import com.example.demo.dto.BillDTO;
import com.example.demo.dto.BillDetailDTO;
import com.example.demo.dto.CartItemDTO;
import com.example.demo.dto.NewCartDTO;
import com.example.demo.model.Bill;
import com.example.demo.model.BillDetail;
import com.example.demo.model.Goods;
import com.example.demo.model.User;
import com.example.demo.repository.BillRepository;
import com.example.demo.repository.GoodsRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

@Service
@Transactional
public class BillServiceImpl implements BillService {

	@Autowired
	private BillRepository billRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private GoodsRepository goodsRepository;

	@Override
	public List<BillDTO> getAllBills() {

		return billRepository.findAllByOrderByCreatedDateDesc().stream().map(ele -> this.toBillDTO(ele)).collect(Collectors.toList());
	}

	private BillDTO toBillDTO(Bill bill) {

		BillDTO billDTO = new BillDTO();
		billDTO.setId(bill.getIdBill());
		billDTO.setCreatedDate(bill.getCreatedDate().toString());
		billDTO.setStatus(bill.getStatus());
		billDTO.setName(bill.getName());
		billDTO.setAddress(bill.getAddress());
		billDTO.setPhone(bill.getPhone());
		billDTO.setGmail(bill.getGmail());
		billDTO.setNote(bill.getNote());
		//billDTO.setUser(bill.getUser());

		List<BillDetailDTO> billDetails = bill.getBillDetails().stream().map(ele -> {

			BillDetailDTO billDetailDTO = new BillDetailDTO();
			billDetailDTO.setGoods(ele.getGoods());
			billDetailDTO.setPrice(ele.getPrice());
			billDetailDTO.setQuantity(ele.getQuantity());

			return billDetailDTO;

		}).collect(Collectors.toList());
		billDTO.setBillDetails(billDetails);

		return billDTO;

	}

	@Override
	public void saveCart(NewCartDTO newCartDTO) {

		List<CartItemDTO> cartItemDTOs = newCartDTO.getCartItemDTOs();
		Bill bill = new Bill();
		bill.setBillType(false);
		bill.setStatus(false);
		bill.setCreatedDate(LocalDate.now());
		bill.setName(newCartDTO.getName());
		bill.setAddress(newCartDTO.getAddress());
		bill.setPhone(newCartDTO.getPhone());
		bill.setGmail(newCartDTO.getGmail());
		bill.setNote(newCartDTO.getNote());

		String email = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userRepository.findUserByEmail(email);
		bill.setUser(user);

		List<BillDetail> billDetailsTempt = new ArrayList<>();
		for (CartItemDTO cartItemDTO : cartItemDTOs) {

			Goods goods = goodsRepository.findById(cartItemDTO.getItemId()).get();
			
			if(goods.getQuantity() < cartItemDTO.getQuantity())
				throw new RuntimeException("Not enough quantity");
			
			BillDetail billDetail = new BillDetail(new Goods(cartItemDTO.getItemId()), bill, goods.getPrice(),
					cartItemDTO.getQuantity());
			billDetailsTempt.add(billDetail);
			
			goods.setQuantity(goods.getQuantity() - cartItemDTO.getQuantity());
			goodsRepository.save(goods);
		}
		bill.setBillDetails(billDetailsTempt);

		billRepository.save(bill);
	}

	@Override
	public void save(Bill bill) {
		billRepository.save(bill);
	}

	@Override
	public Bill findById(Long id) {
		return billRepository.findById(id).orElse(null);
	}

	@Override
	public List<Bill> findAllBillById_User(Long id) {
		return billRepository.findAllBillById_User(id);
	}
}
