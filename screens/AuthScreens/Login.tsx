import React, { Component, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import {connect} from 'react-redux'
import { updateEmail, updatePassword } from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width


interface Props {
    navigation: any
    nombre: string
    user: any
    updateEmail: any
    updatePassword: any
    
  }
 

class Login extends React.Component<Props> {

   

/* state = {
    nombre: ''
} */
           

    render() {


      /*  this.props.navigation.setOptions({
           
           headerTitle: 'Welcome User'
       });

       if(this.state.nombre != undefined && this.state.nombre !==''){
        this.props.navigation.setOptions({
           
            headerTitle: 'Welcome ' + this.state.nombre
        });
       } */

      
      
        return (
            <View style={{flex:1, alignItems:'center'}}>
             <Image source={require('../../assets/backgrounds/fondo_naturaleza.jpeg')} style={{position: 'absolute', zIndex: -1, width: screenWidth, height: screenHeight+50}}/>
                <Text style={{fontSize:35, fontFamily: 'Handlee-Regular', marginVertical:30, color: 'white'}}>Insta</Text>
                <View style={{marginTop:100}}>
                 <View style= {{width: screenWidth*0.9, marginTop: 10}}>
                    <Text style= {{left:15, color: 'white'}}>Email</Text>
                    </View>
                <TextInput 
                style={{height: 50, width: screenWidth*0.9, color: 'white', paddingHorizontal:20, borderRadius: 10, borderColor: 'grey', borderWidth: 1}}
                placeholderTextColor={'white'}
                placeholder={'example@example.com'}
                //onChangeText={(text)=> this.setState({nombre: text})}
                onChangeText= {input=>this.props.updateEmail(input)}
                value = {this.props.user.email}
                />
             
                <View style= {{width: screenWidth*0.9, marginTop: 10}}>
                    <Text style= {{left:15, color: 'white'}}>Password</Text>
                </View>

                <TextInput 
                style={{height: 50, width: screenWidth*0.9, color: 'white', paddingHorizontal:20,borderRadius: 10, borderColor: 'grey', borderWidth: 1}}
                placeholderTextColor={'white'}
                placeholder={'Password1234'}
                onChangeText= {input=>this.props.updatePassword(input)}
                value = {this.props.user.password}
                secureTextEntry={true}

                />

               
                 </View>

                <View style={{width:screenWidth, justifyContent: 'center', alignItems:'center',  margin:30}}>
                <TouchableOpacity style={{width: screenWidth*0.6, height: 50, borderRadius:30, backgroundColor: '#0095f6', 
                justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 20}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center', flexDirection:'row', margin:10 }}
                onPress={()=> this.props.navigation.navigate('Signup') }>
                    <Text style={{fontSize:18, color: 'white'}}>Don't have an account? </Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color: '#0095f6' }}>Sign up</Text>
                    
                </TouchableOpacity>
                 </View>

                <View style={{position:'absolute', bottom:60,justifyContent:'center', alignItems:'center' }}>
                 <Text style={{fontSize:18, color: 'white'}}>from</Text>
                 <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>Sr.Sebastian</Text>
                </View>
            
            
            
            </View>

        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators({updateEmail, updatePassword}, dispatch)
}
const mapStateToProps = (state: { user: any }) => {
    return{
        user: state.user,
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Login)