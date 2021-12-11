import React from 'react';
import {StatusBar, Dimensions} from 'react-native';

import {useNavigation } from '@react-navigation/native'

import {LinearGradient} from 'expo-linear-gradient';

import styled from 'styled-components/native';

import {Header } from '../../components/Header/index';
import {Hero } from '../../components/Hero/index';
import {Movies } from '../../components/Movies/index';


const Container = styled.ScrollView`
    flex: 1;
    background-color: #000;

`

const Poster = styled.ImageBackground`
    width: 100%;
    height: ${(Dimensions.get('window').height * 81) / 140}px;

`

const Gradient = styled(LinearGradient)`
    height: 100%;

`
const Button = styled.TouchableOpacity`
    align-items: center;
`
const TextButton = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-top: 3px;
`

export const Home = () => {

    const item = [
        require('../../assets/movie.jpeg'),
        require('../../assets/movie1.jpeg'),
        require('../../assets/movie2.jpeg'),
        require('../../assets/movie3.jpeg'),
        require('../../assets/movie4.jpeg'),
        require('../../assets/movie5.jpeg'),
    ]
    
    const item1 = [
        require('../../assets/movie6.jpeg'),
        require('../../assets/movie7.jpeg'),
        require('../../assets/movie9.jpeg'),
        require('../../assets/movie10.jpeg'),
        require('../../assets/movie11.jpeg'),
        require('../../assets/movie12.jpeg'),
    ]
    
    const item2 = [
        require('../../assets/movie13.jpeg'),
        require('../../assets/movie14.jpeg'),
        require('../../assets/movie15.jpeg'),
        require('../../assets/movie16.jpeg'),
        require('../../assets/movie17.jpeg'),
        require('../../assets/movie18.jpeg'),
    ]
    
    const item3 = [
        require('../../assets/movie19.jpeg'),
        require('../../assets/movie20.jpeg'),
        require('../../assets/movie21.jpeg'),
        require('../../assets/movie22.jpeg'),
        require('../../assets/movie23.jpeg'),
        require('../../assets/movie24.jpeg'),
    ]
    
    const item4 = [
        require('../../assets/movie25.jpeg'),
        require('../../assets/movie26.jpeg'),
        require('../../assets/movie27.jpeg'),
        require('../../assets/movie28.jpeg'),
        require('../../assets/movie29.jpeg'),
        require('../../assets/movie30.jpeg'),
    ]

    const navigation=useNavigation();
    
    return (
        <>
        <StatusBar 
          translucent 
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Container>
            <Poster source={require('../../assets/poster1.jpg')}>
                <Gradient
                   locations={[0, 0.2, 0.6, 0.93]}
                   colors={[
                        `rgba(0,0,0,0.5)`,
                        `rgba(0,0,0,0)`,
                        `rgba(0,0,0,0)`,
                        `rgba(0,0,0,1)`
                   ]}>
                       <Header />
                       <Hero />
                </Gradient>
            </Poster>

            <Movies label='Minha Lista' item={item} />

            <Movies label='Assistir Novamente' item={item1} />

            <Movies label='Em Alta' item={item2} />

            <Movies label='Só na Netflix' item={item3} />

           <Movies label='Adicionados Recentemente' item={item4} />

            <Button onPress={()=> navigation.navigate("Login")}>
                <TextButton>Sair</TextButton>
            </Button>
        </Container>
        </>
    )
}

