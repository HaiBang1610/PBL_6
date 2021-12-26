import React, {useEffect, useState} from 'react';
import {Text} from 'react-native'
import {Card} from  'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderScreen = () => {
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState();
    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('cart');
          if (value !== null) {
            setCart(JSON.parse(value));
          }
        } catch (error) {
          // Error retrieving data
        }
    }    

    const retrieveTime = async () => {
      try {
        const value = await AsyncStorage.getItem('time');
        if (value !== null) {
          setTime(value);
        }
      } catch (error) {
        // Error retrieving data
      }
  }

    useEffect(()=>{
        retrieveData();
        retrieveTime()
    },[])


    return cart.map((data) =>{
      return (
        <Card>           
            <Text>{data.goodsName} x {data.quantity} : {data.total} VND - {time}</Text>
        </Card>
    ) })
}

export default OrderScreen;
