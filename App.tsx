import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Login from './src/components/login';
import Mdp from './src/components/mdp';
import Button_ok from './src/components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}variant="displayLarge">Spacecraft</Text>
      <StatusBar style="auto" />
    <View/>
    <View style={styles.login}>
      <Login />
      <Mdp />
      <Button_ok />
      <Text style={styles.titre}variant="bodySmall">By login you accept the Terms and Conditions</Text>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    color: 'white',
    alignItems: 'center',
    marginTop: 50,
  },
  titre: {
    color: 'white',
    marginBottom:70,
  },
  login: {
    flex:1,
    width:'100%',
    alignItems: 'center',

  }
});
