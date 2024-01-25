import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Button_ok = () => (
  <Button  style={styles.container} mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button>
);
const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        width:'90%',
      }}
);
export default Button_ok;