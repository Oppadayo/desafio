import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Routes} from './routes';

// import { Container } from './styles';

const app: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default app;
