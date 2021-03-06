import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import NotificationScreen from './screens/NotificationScreen.js';
import store from './redux/store';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#157cdb',
            inactiveTintColor: '#262626',
          }}
          screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Trang chủ',
              tabBarIcon: ({color}) => (
                <MaterialIcons name="home" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              tabBarLabel: 'Thông báo',
              tabBarIcon: ({color}) => (
                <MaterialIcons name="notifications" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Cá nhân',
              tabBarIcon: ({color}) => (
                <MaterialIcons name="person" size={26} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
