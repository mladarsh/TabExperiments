import React,{PureComponent} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './libs/router';


const AppIndex = createAppContainer(AppNavigator) 

export default class App extends PureComponent {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#1a1a1a'}}>
            {/* Header */}
            <View style={{flex:1,flexDirection:'row',width:'100%'}}>
                {/* NavBar */}
                <AppIndex style={{width:'48%',position:'absolute'}}/>
                {/* RightBar */}
                <View style={{width:'42%',backgroundColor:'red',height:'14.11%'}}>

                </View>
            </View>
                
            </View>
        )
    }
}

