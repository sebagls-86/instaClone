import React, { Component } from 'react'
import { Dimensions, Text, View,TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import {connect} from 'react-redux'
import { updateEmail, updatePassword, updateUsername, signup } from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

interface Props {
    navigation: any
    nombre: string
    user: any
    updateEmail: any
    updatePassword: any
    updateUsername: any
    signup: any
  }

class Signup extends React.Component<Props> {

      state = {
          repeat: ''
      }

      onLoginPress = () =>{
        if(this.props.user.password == this.state.repeat && this.props.user.username !== ''){
           this.props.signup()
        }else{
            alert('the passcodes are different')
        }
      }

    render() {

        
        return (
            <View style={{flex:1,backgroundColor:'blue', alignItems:'center'}}>
            <Image source={require('../../assets/backgrounds/background.jpg')} style={{position: 'absolute', zIndex: -1, width: screenWidth, height: screenHeight+50}}/>
            
                <View style= {{width: screenWidth*0.9, marginTop: 10}}>
                    <Text style= {{left:15, color: 'white'}}>Username</Text>
                    </View>
                <TextInput 
                style={{height: 50, width: screenWidth*0.9, color: 'white', paddingHorizontal:20, borderRadius: 10, borderColor: 'grey', borderWidth: 1}}
                placeholderTextColor={'white'}
                placeholder={'User_Name'}
                //onChangeText={(text)=> this.setState({nombre: text})}
                onChangeText= {input=>this.props.updateUsername(input)}
                value = {this.props.user.username}
                />

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
            
                <View style= {{width: screenWidth*0.9, marginTop: 10}}>
                    <Text style= {{left:15, color: 'white'}}>Repeat Password</Text>
                </View>

                <TextInput 
                style={{height: 50, width: screenWidth*0.9, color: 'white', paddingHorizontal:20,borderRadius: 10, borderColor: 'grey', borderWidth: 1}}
                placeholderTextColor={'white'}
                placeholder={'Password1234'}
                onChangeText= {input=>this.setState({repeat: input})}
                value = {this.state.repeat}
                secureTextEntry={true}

                />
            
            

            <TouchableOpacity 
            style={{backgroundColor:'blue', margin:30, borderRadius:30, height: 50, width: screenWidth*0.6, justifyContent: 'center', alignItems: 'center' }}
            onPress={()=> this.onLoginPress() }>
            <Text style={{color:'white', fontSize: 20}}> Sign Up </Text>
           </TouchableOpacity>


            <TouchableOpacity 
            style={{backgroundColor:'blue', margin:10, borderRadius:5}}
            onPress={()=> this.props.navigation.navigate('Login') }>
            <Text style={{color:'white'}}> Go to login page </Text>
           </TouchableOpacity>

        </View>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators({updateEmail, updatePassword, updateUsername, signup}, dispatch)
}
const mapStateToProps = (state: { user: any }) => {
    return{
        user: state.user,
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Signup)