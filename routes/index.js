
import React from "react";
import {Login} from  "../pages/Login/index";
import {Home } from  "../pages/Home/index";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Routes=()=>{
    return(

    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
       <Stack.Screen name="Home" component={Home} options={{headerShown:false,}}/>
    </Stack.Navigator>

    );
}