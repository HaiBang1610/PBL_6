import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import loginApi from "../api/loginApi";
import { loginUser } from "../redux/actions/loginAction";
import { useDispatch, useSelector} from "react-redux";

 export default function loginScreen() {
  const navigation = useNavigation();

  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  

  const fetchLogin = async () => {
    const response = await loginApi.userLogin(username, password);
    dispatch(loginUser(response.data));
    if (response.data.token) {
      navigation.goBack()
      //console.log(response.data.token)
    }
  }

  const logIn=() =>{
    if (username === "") 
      {Alert.alert('Cảnh báo','Vui lòng nhập tài khoản!')}
    else if (password === "")
      {Alert.alert('Cảnh báo','Vui lòng nhập mật khẩu!')}
    else fetchLogin() 
  }


  useEffect(() => {
    //fetchLogin()
  },[]);

 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo1.png")}  />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={username}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
        onPress={logIn}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    height:200,
  },
 
  inputView: {
    backgroundColor: "#87cefa",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    //alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#48d1cc",
  },
});