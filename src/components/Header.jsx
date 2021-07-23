import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Header() {
  return (
    <View style={css.conteudo}>
      <Text style={css.Titulo}>Calculadora</Text>
    </View>

  );
}

const css = StyleSheet.create({
  conteudo: {
    height:Dimensions.get("window").width/5,
    width:Dimensions.get("window").width-20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#0f0a",
    marginBottom: 2,
  },
  Titulo: {
    color: "#000",
    fontFamily: "monospace",
    fontSize: 32,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
})