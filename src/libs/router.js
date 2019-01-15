import {createMaterialTopTabNavigator} from 'react-navigation';
import React from 'react';
import {} from 'react-native';
import HomeScreen from '../pages/home';
import SecondScreen from '../pages/home/second';
import ThirdScreen from '../pages/home/third';
import RightBar from '../pages/RightBar';


const AppNavigator= createMaterialTopTabNavigator(
    {
        Home:HomeScreen,
        Second:SecondScreen,
        Third:ThirdScreen

    },
    {
        tabBarOptions:{
            activeTintColor:'darkgray',
            inactiveTintColor:'tomato',
            showIcon:true,
            
            indicatorStyle:{
                
                backgroundColor:'steelblue',
                width:200,
                height:15
            },
            tabStyle:{
                width:200,
                backgroundColor:'transparent'
                
            },
            style:{
                backgroundColor:'transparent',
              
            }
        },
        
    }
)

export default AppNavigator;