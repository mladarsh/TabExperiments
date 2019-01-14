import React from 'react';
import {View,Text} from 'react-native';

export default class SecondScreen extends React.PureComponent{
    render(){
        return(
            <View style={{backgroundColor:'aquamarine',height:'100%'}}>
                <Text>This is Second Screen</Text>
            </View>
        )
    }
}