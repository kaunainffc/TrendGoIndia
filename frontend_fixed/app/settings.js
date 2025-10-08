import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <Text style={styles.text}>Adjust your app preferences here.</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('index')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF3E0' },
  text: { fontSize: 20, margin: 20, textAlign: 'center' },
});
