package com.example.demo.service;

import com.example.demo.model.Goods;

import java.util.List;
import java.util.Map;


public interface GoodsService {
    List<Goods> findAllGoods();
    Map<String, Object> searchGoods(long idCategory, double startPrice, double endPrice, int page, int size);
 
   
    Map<String, Object> findAllByGoodsNameContaining(String name, int page, int size);
    List<Goods> findAllByCategory_IdCategory(Long id);
}
