import React, { Component, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'


interface Props {
    navigation: any
    nombre: string
  }
 

export default class Login extends React.Component<Props> {

state = {
    nombre: ''
}
           

    render() {


       this.props.navigation.setOptions({
           
           headerTitle: 'Welcome User'
       });

       if(this.state.nombre != undefined && this.state.nombre !==''){
        this.props.navigation.setOptions({
           
            headerTitle: 'Welcome ' + this.state.nombre
        });
       }

      
      
        return (
            <View style={{flex:1,backgroundColor:'red', alignItems:'center', justifyContent:'center',}}>
                <Text> Login </Text>
                <TouchableOpacity 
                style={{backgroundColor:'black', margin:10, borderRadius:5}}
                onPress={()=>this.props.navigation.navigate('Signup')}>
                <Text style={{color:'white'}}> Go to signup page </Text>
                </TouchableOpacity>


                <TextInput 
                style={{height: 50, color:'white',textDecorationColor: 'white', backgroundColor: 'black', paddingHorizontal:20, margin:0, borderRadius:10, borderColor:'white', borderWidth:1}}
                placeholderTextColor={'white'}
                placeholder={'Ingrese nombre'}
                onChangeText={(text)=> this.setState({nombre: text})}
                />
               
            </View>
        )
    }
}
