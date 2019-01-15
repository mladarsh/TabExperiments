import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './libs/router';
import RightBar from './pages/RightBar';


const AppIndex = createAppContainer(AppNavigator) 

export default class App extends PureComponent {
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:'#1a1a1a',width:'100%'}}>
             

               
                <RightBar stye={{ alignSelf: 'flex-end',
    marginTop: -5,
    position: 'absolute',zIndex:0}}/>

                <AppIndex style={{zIndex:1}}/>
                
            </View>
        )
    }
}

