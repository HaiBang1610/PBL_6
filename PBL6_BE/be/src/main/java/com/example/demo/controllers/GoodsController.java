package com.example.demo.controllers;

import com.example.demo.model.Category;
import com.example.demo.model.Goods;
import com.example.demo.repository.BillRepository;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.GoodsRepository;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Controller
@RestController
@CrossOrigin
@RequestMapping("/goods")
@Transactional
public class GoodsController {
	@Autowired
	GoodsService goodsService;
	@Autowired
	UserService userService;
	@Autowired
	CategoryService categoryService;
	@Autowired
	BillService billService;
	@Autowired
	BillRepository billRepository;

	@Autowired
	GoodsRepository goodsRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	CloudinaryService cloudinaryService;

	public static Boolean check = false;

	@GetMapping("/getAll")
	public ResponseEntity<List<Goods>> getAllGoods() {
		List<Goods> goodsList = goodsService.findAllGoods();
		if (goodsList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(goodsList, HttpStatus.OK);
	}

	@GetMapping("/getSaleOff")
	public ResponseEntity<List<Goods>> getSaleOff() {
		List<Goods> goodsList = goodsRepository.findByOrderBySaleOffDesc(PageRequest.of(0, 8));
		return new ResponseEntity<>(goodsList, HttpStatus.OK);
	}

	@GetMapping("/getHotTrend")
	public ResponseEntity<List<Goods>> getHotTrend() {
		List<Goods> goodsList = goodsRepository.findByOrderByCreatedDateDesc(PageRequest.of(0, 8));
		return new ResponseEntity<>(goodsList, HttpStatus.OK);
	}

	@GetMapping("/findById/{id}")
	public ResponseEntity<Goods> findById(@PathVariable("id") int id) {
		Goods goods = goodsRepository.findById(id).get();
		if (goods == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(goods, HttpStatus.OK);
	}

	@GetMapping("/search")
	public Map<String, Object> searchGoods(@RequestParam(name = "idCategory", defaultValue = "0") long categoryId,
			@RequestParam(name = "startPrice", defaultValue = "-1") double startPrice,
			@RequestParam(name = "endPrice", defaultValue = "0") double endPrice,
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "9") int size) {

		return goodsService.searchGoods(categoryId, startPrice, endPrice, page, size);
	}

	@GetMapping("/getAllTypeGoods")
	public List<Category> getAllTypeGoods() {

		return categoryRepository.findAll();
	}

	@GetMapping("/inputSearch")
	public Map<String, Object> inputSearch(@RequestParam(name = "name", defaultValue = "") String name,
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "9") int size) {

		return goodsService.findAllByGoodsNameContaining(name, page, size);
	}

	@PostMapping("/saveGoods")
	public Goods saveGoods(@RequestBody Goods goods) {

		if (goods.getIdGoods() == 0)
			goods.setCreatedDate(LocalDate.now());
		else {
			Goods tempt = goodsRepository.findById(goods.getIdGoods()).get();
			if (goods.getDescription().length() == 0)
				goods.setDescription(tempt.getDescription());

			goods.setImage(tempt.getImage());
		}
		return goodsRepository.save(goods);
	}

	@PutMapping(value = "/uploadImage/{id}")
	public void updateImage(@PathVariable("id") Integer id, @RequestPart("file") MultipartFile file) {

		System.out.println("upload");
		Goods goods = goodsRepository.findById(id).get();
		String fileName = cloudinaryService.uploadFile(file);
		goods.setImage(fileName);
		goodsRepository.save(goods);
	}

	@DeleteMapping("/deleteGoods/{id}")
	public void deleteGoods(@PathVariable("id") int id) {

		goodsRepository.deleteById(id);
	}

	@GetMapping("/searchByGoodsType")
	public ResponseEntity<List<Goods>> searchByGoodsType(@RequestParam("valueSearch") String valueSearch){
		List<Goods> goodsList = goodsService.findAllByCategory_IdCategory(Long.parseLong(valueSearch));
		return new ResponseEntity<>(goodsList, HttpStatus.OK);
	}

}
