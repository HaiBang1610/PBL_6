import "react-native-gesture-handler";
import React, { useEffect, useState, useContext } from "react";
import { View, ScrollView, Button, StyleSheet,FlatList, Text, Alert } from "react-native";
import { Card } from  'react-native-elements';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () =>{
    const navigation = useNavigation();
    const carts = useSelector((state) => state.carts.carts);
    const user = useSelector((state) => state.user.user);
    const [total, setTotal] = useState(0);
    const [currentDate, setCurrentDate] = useState('');

    function Totals() {
      let price = 0;
      carts.forEach(element => {
        price += element.total;
      });

      setTotal(price);
      return (
          <View style={styles.cartLineTotal}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
            <Text style={styles.lineRight}>{total} VND</Text>
          </View>
      );
    }

    function renderItem({item}) {
      return (
          <View style={styles.cartLine}>
            <Text style={styles.lineLeft}>{item.goodsName} x {item.quantity} </Text>
            <Text style={styles.lineRight}> {item.total} VND</Text>
          </View>
      );
    }

    const check = ()=> {
      if (user.token === undefined)
        {Alert.alert('Thông báo','Bạn cần đăng nhập để sử dụng chức năng thanh toán!')}
      else if (carts.length === 0) {Alert.alert('Thông báo','Giỏ hàng của bạn đang trống')}
      else {
        AsyncStorage.setItem('cart',JSON.stringify(carts));
        AsyncStorage.setItem('time',currentDate);
        Alert.alert('Thông báo','Thanh toán thành công, vui lòng kiểm tra lịch sử mua hàng!')
      }
    }
    
    useEffect(() => {
      Totals();
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      setCurrentDate(
        date + '/' + month + '/' + year 
      );
    }, [])

    return(
      <Card flex={1}>
        <View>
            <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={carts}
            renderItem={renderItem}
            ListFooterComponent={Totals}
            />
            <View style={styles.button}>
            <Text style={styles.user}>Người dùng: {user.fullName} {"\n"}
                                      Thời gian thanh toán: {currentDate}
            </Text>
            <Card.Divider/>
            <Button 
            title="Thanh toán"
            onPress={check}
            ></Button>
            </View>
        </View>
      </Card>
    )
    
}

const styles = StyleSheet.create({
    button: {
      paddingVertical: 30,
      alignItems: "center",
      borderRadius: 4,
    },
    cartLine: { 
      flexDirection: 'row',
      
    },
    cartLineTotal: { 
      flexDirection: 'row',
      borderTopColor: '#000000',
      borderTopWidth: 1
    },
    lineTotal: {
      fontWeight: 'bold',    
    },
    lineLeft: {
      width:200,
      fontSize: 20, 
      lineHeight: 40, 
      color:'#333333' 
    },
    lineRight: { 
      flex: 1,
      fontSize: 20, 
      fontWeight: 'bold',
      lineHeight: 40, 
      color:'#333333', 
      textAlign:'right',
    },
    itemsList: {
      backgroundColor: '#eeeeee',
    },
    itemsListContainer: {
      backgroundColor: '#eeeeee',
      paddingVertical: 8,
      marginHorizontal: 8,
    },
    user: {
      fontSize: 20
    }
  });

export default CartScreen;