import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Content from '../projetoCalc/src/components/Content';
import Footer from './Footer';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
