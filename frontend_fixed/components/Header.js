import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for products, brands..."
      />
      <Feather name="shopping-cart" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
});
