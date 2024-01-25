import { StyleSheet, View, ScrollView  } from 'react-native';
import { Text, Button} from 'react-native-paper';
import Login from '../components/login';
import Mdp from '../components/mdp'
import Button_ok from '../components/button';
import Header from '../components/header';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
    <ScrollView/>
    <ScrollView style={styles.login}>
      <Login />
      <Mdp />
      <Button_ok />
      <Text variant="bodySmall">By login you accept the Terms and Conditions</Text>
    </ScrollView>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
  },
  titre: {
    color: 'white',
  },
  login: {
    flex:1,
    width:'100%',
    alignItems: 'center',

  }
});
