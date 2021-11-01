import * as React from 'react';
import { View, Text } from 'react-native';
import AppLoading from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from '@use-expo/font'
import Login from '../screens/AuthScreens/Login';
import Signup from '../screens/AuthScreens/Signup';


const Stack = createNativeStackNavigator();

export default function App(){

    let [fontsLoaded] = useFonts({

        'Handlee-Regular': require('../assets/fonts/Handlee-Regular.ttf')
    });

    if(!fontsLoaded){

    return<View/>;
    }else {

    
    return(
        <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen name= 'Login' component={Login} />
                 <Stack.Screen name= 'Signup'component={Signup}/>
             </Stack.Navigator>
        </NavigationContainer>
    )
    }
}