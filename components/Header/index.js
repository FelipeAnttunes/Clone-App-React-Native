import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
     align-items: center;
     flex-direction: row;
     justify-content: space-between;
     padding: 25px 25px 0 25px;
     width: 100%;
`
const Logo = styled.Image`
     width: 30px;
     height: 40px;
      
`
const Menu = styled.Text`
     font-size: 18px;
     color: #fff;
     letter-spacing: 0.1px;
`


export const Header = () => {
    return (
       <Container>
           <Logo resizeMode="contain" source={require('../../assets/logo.png')}/>
           <Menu>Séries</Menu>
           <Menu>Filmes</Menu>
           <Menu>Categorias</Menu>
       </Container>
    )
}
