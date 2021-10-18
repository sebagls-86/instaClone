import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

interface Props {
    navigation: any
  }

export default class Signup extends React.Component<Props> {

      

    render() {

        
        return (
            <View style={{flex:1,backgroundColor:'blue', alignItems:'center', justifyContent:'center'}}>
            <Text> SignUp </Text>
            <TouchableOpacity 
            style={{backgroundColor:'black', margin:10, borderRadius:5}}
            onPress={()=> this.props.navigation.navigate('Login') }>
            <Text style={{color:'white'}}> Go to login page </Text>
        

            </TouchableOpacity>
        </View>
        )
    }
}
