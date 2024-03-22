import { StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Text as PaperText } from 'react-native-paper';
import Login from '../components/login';
import Mdp from '../components/mdp';
import Button_ok from '../components/button';
import Header from '../components/header';
import React from 'react';


export default function LoginScreen({navigation}) {
  function navigateToTerms() {
    navigation.navigate('Terms');
  }

  function navigateToStarshipFeedScreen(navigation) {
    navigation.navigate('Starship');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Login />
      <Mdp />
      <Button_ok />
      <TouchableOpacity onPress={navigateToTerms}> 
        <PaperText>By logging in, you accept the Terms and Conditions</PaperText> 
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});
