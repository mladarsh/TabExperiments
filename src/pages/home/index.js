import React from 'react';
import {View,Text,Dimensions} from 'react-native';
import {} from 'react-navigation'
import IconNavDrive from '../../icon';

export default class HomeScreen extends React.PureComponent{
    render(){
        return(
            <View style={{backgroundColor:'steelblue',height:'100%',width: Dimensions.get('window').width}}>
                <Text>This is Home Screen</Text>
            </View>
        )
    }
}

HomeScreen.navigationOptions={
    tabBarIcon:
        <IconNavDrive />
    
}