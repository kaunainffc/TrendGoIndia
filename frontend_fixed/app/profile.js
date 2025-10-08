import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <Text style={styles.text}>This is your profile page.</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('index')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E3F2FD' },
  text: { fontSize: 20, margin: 20, textAlign: 'center' },
});
