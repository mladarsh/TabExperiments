import {createMaterialTopTabNavigator} from 'react-navigation';
import React from 'react';
import {} from 'react-native';
import HomeScreen from '../pages/home';
import SecondScreen from '../pages/home/second';
import ThirdScreen from '../pages/home/third';


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
                width:'30%',
                backgroundColor:'dodgerblue',
                height:'10%',
            },
            style:{
                backgroundColor:'transparent',
                
                allowFontScaling:false
            }
        },
        
    }
)

export default AppNavigator;