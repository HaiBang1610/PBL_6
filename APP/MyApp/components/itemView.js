import React, {useState} from "react";
import {View,Text, StyleSheet,Image,Alert,SafeAreaView} from 'react-native';
import {Card} from  'react-native-elements';

const Item = ({image, goodsName, description, quantity, saleOff, price, priceForSaleOff}) => {
    return (
        <>
            <View style ={styles.imageView}>
            <Image source={{uri : image}} style = {styles.image}></Image>
            </View>
            <Card.Divider></Card.Divider>
            <Card.Title>{goodsName}</Card.Title>
            <Card.Divider />
            <View>
                <Text style={styles.detail}>
                    Chi tiết sản phẩm: {description}{"\n"}
                    Số lượng hàng còn lại: {quantity}{"\n"}
                    Giảm giá: {saleOff} %{"\n"}
                </Text>
            </View>
            <Card.Divider />
            <View>
                <Text style ={styles.t}>Giá cũ: {price} VND{"\n"}</Text>
                <Text style ={styles.t2}>Giá mới: {priceForSaleOff} VND</Text>
            </View>
            <Card.Divider />
        </>
    )
};

const styles = StyleSheet.create({
    detail:{
        fontSize: 20,
    },
    t: {
        fontSize: 18,
        alignSelf: 'flex-end', 
        textDecorationLine: 'line-through',
    },
    t2: {
        fontSize: 18, 
        alignSelf: 'flex-end',
        paddingRight:6
    },
    image: {
        width: 350,
        height: 350,
    },
    imageView: {
        alignItems: 'center'
    }
});

export default Item;