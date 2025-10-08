import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import your actual screens/components here
// Example:
// import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, TrendGoIndia!</Text>
      {/* Replace above Text with your actual component, e.g., <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
