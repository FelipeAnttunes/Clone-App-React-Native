import React from "react";
import {Image, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Text} from "react-native";
import {useNavigation} from "@react-navigation/native"
import {styless} from '../../pages/Login/style';

export const Login = () => {

  const navigation = useNavigation();

  return(
    
    <KeyboardAvoidingView style ={styless.background}>

      <View style = {styless.logo}> 
       <Image      
        source={require('../../assets/logo.png')}/>
       </View>
       
       <View style={styless.containerinput}>
	      <TextInput
         style={styless.input}
         placeholder="Email"
         autoCorrect={false}
         onChangeText={() => {''}}/>
         <TextInput
         style={styless.input}
         placeholder="Senha"
         autoCorrect={false}
         onChangeText={() => {''}}
         secureTextEntry={true}/>
         
         <TouchableOpacity style={styless.btnSubmit} onPress={()=> navigation.navigate("Home")} >
           <Text style={styless.submitText}> Entrar </Text>
         </TouchableOpacity>


         <TouchableOpacity style={styless.btnRegister}>
           <Text style={styless.registerText}> Criar conta </Text>
         </TouchableOpacity>

      </View> 
    </KeyboardAvoidingView>
);

};
