import { StyleSheet, ScrollView  } from 'react-native';
import { Text } from 'react-native-paper';
import Login from '../components/login';
import Mdp from '../components/mdp'
import Button_ok from '../components/button';
import Header from '../components/header';


export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Login />
      <Mdp />
      <Button_ok />
      <Text variant="bodySmall">By login you accept the Terms and Conditions</Text>
    </ScrollView>
    
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
    },
});
  