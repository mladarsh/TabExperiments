import React from 'react';
import {View,Text} from 'react-native';

export default class ThirdScreen extends React.PureComponent{
    render(){
        return(
            <View style={{backgroundColor:'gold',height:'100%'}}>
                <Text>This is Third Screen</Text>
            </View>
        )
    }
}