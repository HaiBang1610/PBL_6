package com.example.demo.repository;

import com.example.demo.model.Goods;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GoodsRepository extends JpaRepository<Goods, Integer> {
	List<Goods> findAllByCategory_IdCategory(Integer id);

	Page<Goods> findAllByGoodsNameContaining(String name, Pageable pageable);

	Page<Goods> findByCategoryIdCategoryAndPriceBetween(long idCategory, double startPrice, double endPrice,
			Pageable pageable);

	Page<Goods> findByCategoryIdCategory(long idCategory, Pageable pageable);

	Page<Goods> findByPriceBetween(double startPrice, double endPrice, Pageable pageable);

	List<Goods> findByOrderBySaleOffDesc(Pageable pageable);

	List<Goods> findByOrderByCreatedDateDesc(Pageable pageable);

	List<Goods>  findAllByCategory_IdCategory(Long id);
}
