import * as React from 'react';
import { Button } from 'react-native-paper';

const Button_ok = () => (
  <Button mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button>
);

export default Button_ok;