import { StyleSheet, ScrollView, Dimensions, TouchableOpacity  } from 'react-native';
import { Text } from 'react-native-paper';
import Login from '../components/login';
import Mdp from '../components/mdp'
import Button_ok from '../components/button';
import Header from '../components/header';


// var height = Dimensions.get('window').height;
export default function LoginScreen({navigation}) {
  function navigateToTerms() {
    navigation.navigate('Terms');
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Login />
      <Mdp />
      <Button_ok />
      <TouchableOpacity onPress={navigateToTerms}> 
      <Text> By login you accept the Terms and Conditions </Text> 
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
  