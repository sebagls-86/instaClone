import { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwitchNavigator from  './navegation/LoginNavigator'
import thunkMiddleware from 'redux-thunk'
import user from './reducers/index'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'



const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(user, middleware)

export default class App extends React.Component {


  render(){
  return (
   
    <Provider store={store}>

    <SwitchNavigator/>
    </Provider>
    
  );
}
}


