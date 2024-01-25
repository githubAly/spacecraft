import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function Header() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titre}variant="displayMedium">Spacecraft</Text>
      </ScrollView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'purple',
      color: 'white',
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 30,
      width: '100%',
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
  