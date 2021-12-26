import React ,{useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  Button,
  FlatList,
  TextInput
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Product } from './productView';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productActions';
import productApi from '../api/productApi';

const {width} = Dimensions.get('window');

const section_banner = require('../assets/doan.jpg');

const HomeSectionComponent = () => {
  const navigation = useNavigation();

  const carts = useSelector((state) => state.carts.carts);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const [filterData, setfilterData] = useState([]);
  const [search, setSearch] = useState('');

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
        onPress={() => {
          navigation.navigate('DetailsScreen', {
            productId: product.idGoods,
            quantity: getQuantityInCart(product.idGoods),
          });
        }}
      />
    );
  }

  const getQuantityInCart = (idGoods) => {
    var cart = carts.filter((item) => item.idGoods === idGoods);
    if (cart && cart.length === 1) {
        return cart[0].quantity;
    }

    return 0;
  };

  const fetchProducts = async () => {
    const response = await productApi.getProducts();
    dispatch(getAllProducts(response.data));
  }
  
  const fetchProductForCategory = async (categoryId) => {
    const response = await productApi.getProductForCategory(categoryId);
    dispatch(getAllProducts(response.data));
  }

  useEffect(() => {
     fetchProducts();
  },[]);

  const searchFilter=(text)=>{
    if (text){
      const newData = products.filter((item)=>{
        const itemData = item.goodsName ? item.goodsName.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setfilterData(newData);
      setSearch(text);
    }
    else {
      setfilterData(products);
      setSearch(text);
    }
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <TextInput 
            style={styles.inputText} 
            placeholder='Bạn cần tìm gì?'
            value={search}
            onChangeText={(text) => searchFilter(text)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.list}>
        <Image source={section_banner} style={styles.sectionImage} />
          <View style={styles.filterContainer}>
            <Button title='Tất cả' style = {styles.buttonfilter} color='#5f9ea0' onPress={(event) => fetchProducts()} ></Button>
            <Button title='Áo' style = {styles.buttonfilter} color='#5f9ea0' onPress={(event) => fetchProductForCategory("1") } ></Button>
            <Button title='Quần' style = {styles.buttonfilter} color='#5f9ea0' onPress={(event) => fetchProductForCategory("2")} ></Button>
            <Button title='Giày-Dép' style = {styles.buttonfilter} color='#5f9ea0' onPress={(event) => fetchProductForCategory("3")} ></Button> 
          </View>
        <FlatList marginTop={10} borderRadius={10} 
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.idGoods.toString()}
        data={search ? filterData : products}
        renderItem={renderProduct}   
        />
      </View>
    </View>
  );
};


export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    flex: 1
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 1,
  },
  sectionImage: {
    width: width - 24,
    height: 100,
    borderRadius: 4,
    marginTop:5
  },
  //
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 4,
    paddingEnd:8,
    backgroundColor: '#1e88e5',
    borderRadius:10
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingBottom:-10,
    marginBottom:8,
    height: 35,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
  //
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  //
  list:{
    flex:1,
    marginTop:5
  },
  buttonfilter: {
    borderRadius: 30,
  }
});
