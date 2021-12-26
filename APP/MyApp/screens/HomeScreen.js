import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeSectionComponent from '../components/HomeSectionComponent.js';
import DetailsScreen from '../screens/DetailsScreen'
import CartScreen from '../screens/CartScreen'
import loginScreen from '../screens/LoginScreen'
import OrderScreen from './OrderScreen.js';

import { CartProvider } from '../components/CartContext.js';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <CartProvider>
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.bodyContainer}>
      <Stack.Navigator screenOptions={{headerShown: true,headerBackButtonMenuEnabled: true}}>
        <Stack.Screen name="Trang chủ" component={HomeSectionComponent} options={{
          headerStyle:{backgroundColor:'#1e88e5'},
          headerRight:()=>(
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen') }> 
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
            </TouchableOpacity>
          ), 
          headerTitleStyle:{color: "#ffffff",fontSize: 20,fontWeight: '500'}}} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerStyle:{backgroundColor:'#1e88e5'},
          headerTitle:'Chi tiết',headerRight:()=>(
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen') }> 
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
            </TouchableOpacity>
          )}} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerStyle:{backgroundColor:'#1e88e5'},
          headerTitle:'Giỏ hàng'}} />
        <Stack.Screen name="loginScreen" component={loginScreen} options={{headerStyle:{backgroundColor:'#1e88e5'},
          headerTitle:'Đăng nhập'}} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} options={{headerStyle:{backgroundColor:'#1e88e5'},
          headerTitle:'Đơn hàng'}} />
      </Stack.Navigator>
      </View>
    </View>
    </CartProvider>
  );
};

{/* <Button
              onPress={() => alert('This is a button!')}
              title="Giỏ hàng"
              color="#00ced1"
            /> 
          */}

//<ScrollView>
         // <HomeSectionComponent>
        //  </HomeSectionComponent>
      //  </ScrollView>

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
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
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
