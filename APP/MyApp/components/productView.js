import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({goodsName, priceForSaleOff, image, onPress}){
    return(
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Image source={{uri : image}} style={styles.itemImage} />
        <View>
        <Text style={styles.itemName} numberOfLines={2} b>
        {goodsName}
        </Text>
        <Text style={styles.itemPrice}>Giá: {priceForSaleOff} VND</Text></View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 230,
        marginRight: 12,
        marginTop: 10,
        flexDirection:'row'
      },
      itemImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        borderColor: '#000000'
      },
      itemName: {
        fontSize: 22,
        color: '#484848',
        marginVertical: 4,
        marginLeft: 10,
        
      },
      itemPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2a2a2a',
        marginLeft: 10,
      },
})