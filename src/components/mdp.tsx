import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Login = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput style={styles.input }
      label="Mot de passe"
      value={text}
      onChangeText={text => setText(text)}
    />
    
  );
};
const styles = StyleSheet.create({
    input:{
        width: '90%',
      }}
);
export default Login;