import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import logo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';

const Header: React.FC = () => (
  <Container>
    <Top>
      <Logo source={logo} />
      <Title>Marcelo</Title>
    </Top>
    <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
  </Container>
);

export default Header;
