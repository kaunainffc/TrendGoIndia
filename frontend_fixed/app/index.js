import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import Header from '../components/Header';

const sampleProducts = [
  { id: 1, name: 'iPhone 15', price: 120000, image: require('../assets/images/iphone.png') },
  { id: 2, name: 'Laptop', price: 50000, image: require('../assets/images/laptop.png') },
];

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={sampleProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Image source={item.image} style={{ width: 150, height: 150 }} />
            <Text>{item.name}</Text>
            <Text>₹ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
