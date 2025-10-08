import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    elevation: 3,
  },
  image: { width: '100%', height: 150, resizeMode: 'contain' },
  name: { marginTop: 5, fontSize: 14 },
  price: { marginTop: 2, fontWeight: 'bold' },
});
