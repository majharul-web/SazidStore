
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Pages/Home';
import Cart from './src/Pages/Cart';
import Register from './src/Pages/Register';
import Profile from './src/Pages/Profile';
import Post from './src/Pages/Post';
import { StyleSheet, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#02E4F7'
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )

}


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#0E3281',
          header: () => null,
          "tabBarShowLabel": false,
          "tabBarStyle": {

            position: 'absolute',
            bottom: 1,
            left: 16,
            right: 16,
            borderRadius: 20
          }

        }}

      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarLabel: 'Register',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />
          }}


        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen name="Cart" component={Cart}
          options={{
            tabBarLabel: 'CarT',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});


export default App;