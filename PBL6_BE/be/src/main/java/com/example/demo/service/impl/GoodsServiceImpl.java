package com.example.demo.service.impl;

import com.example.demo.model.Goods;
import com.example.demo.repository.GoodsRepository;
import com.example.demo.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoodsServiceImpl implements GoodsService {
	@Autowired
	GoodsRepository goodsRepository;

	@Override
	public List<Goods> findAllGoods() {
		return goodsRepository.findAll();
	}

	@Override
	public Map<String, Object> searchGoods(long idCategory, double startPrice, double endPrice, int page, int size) {

		Map<String, Object> result = new HashMap<String, Object>();

		if (idCategory == 0 && startPrice == -1) {
			Page<Goods> pageTempt = goodsRepository.findAll(PageRequest.of(page, size));
			result.put("total", pageTempt.getTotalPages());
			result.put("data", pageTempt.toList());

			return result;
		}

		if (idCategory > 0 && startPrice > 0) {

			Page<Goods> pageTempt = goodsRepository.findByCategoryIdCategoryAndPriceBetween(idCategory, startPrice,
					endPrice, PageRequest.of(page, size));
			result.put("total", pageTempt.getTotalPages());
			result.put("data", pageTempt.toList());

			return result;
		}

		if (idCategory == 0) {
			Page<Goods> pageTempt = goodsRepository.findByPriceBetween(startPrice, endPrice,
					PageRequest.of(page, size));
			result.put("total", pageTempt.getTotalPages());
			result.put("data", pageTempt.toList());

			return result;
		}

		Page<Goods> pageTempt = goodsRepository.findByCategoryIdCategory(idCategory, PageRequest.of(page, size));
		result.put("total", pageTempt.getTotalPages());
		result.put("data", pageTempt.toList());

		return result;
	}

	@Override
	public Map<String, Object> findAllByGoodsNameContaining(String name, int page, int size) {

		Map<String, Object> result = new HashMap<String, Object>();

		Page<Goods> pageTempt = goodsRepository.findAllByGoodsNameContaining(name, PageRequest.of(page, size));
		result.put("total", pageTempt.getTotalPages());
		result.put("data", pageTempt.toList());

		return result;
	}

	@Override
	public List<Goods> findAllByCategory_IdCategory(Long id) {
		return goodsRepository.findAllByCategory_IdCategory(id);
	}
}
