import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Mdp = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput style={styles.input }
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
    
  );
};
const styles = StyleSheet.create({
    input:{
        width: '90%',
        marginBottom:30,
      }}
);
export default Mdp;