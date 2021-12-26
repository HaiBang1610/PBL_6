import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Button, SafeAreaView, Alert } from 'react-native' ;
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from  'react-native-elements';
import NumericInput from 'react-native-numeric-input'
import { selectedProduct } from '../redux/actions/productActions';
import Item from '../components/itemView';
import productApi from '../api/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, updateCart } from '../redux/actions/cartActions';


const DetailsScreen = ({route})=> { 
    const product = useSelector((state) => state.product);
    const { productId, quantity } = route.params;
    const [number, setNumber] = useState(quantity);
    const dispatch = useDispatch();

    const fetchProductDetail = async (productId) => {
        var response = await productApi.getProduct(productId);
        dispatch(selectedProduct(response.data));
    }

    const checkQuantity = () =>{
        if (number === 0) {
            Alert.alert('Thông báo','Vui lòng chọn số lượng!')
        } else if (product.quantity < number) {
            Alert.alert('Thông báo','Bạn đang chọn quá số lượng hàng hiện tại trong kho!')
        } else {
            const cartNew = { 
                idGoods: productId,
                goodsName: product.goodsName, 
                quantity: number, 
                total: number * parseInt(product.priceForSaleOff) 
            };

            dispatch(addCart(cartNew));
            Alert.alert('Thông báo','Thêm vào giỏ hàng thành công!')
        }
    }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail(productId);
        }
    }, [productId]);

    return(
        <SafeAreaView>
            <ScrollView>      
                <Card>
                    <Item {...product}></Item>
                    <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
                        <NumericInput 
                            value={number}
                            totalWidth={100}
                            minValue={0}
                            maxValue={99}
                            onChange={value => setNumber(value) }
                        />
                        <Button title='Thêm vào giỏ hàng' onPress={checkQuantity}></Button>
                    </View>
                </Card>
            </ScrollView>
        </SafeAreaView>          
    );
};

export default DetailsScreen;