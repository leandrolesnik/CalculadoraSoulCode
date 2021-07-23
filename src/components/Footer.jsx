import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Footer() {
  return (
    <View style={css.conteudo}>
      <Text style={css.Texto}>©2021 - Leandro Lesnik - BCW3</Text>
    </View>
  );
}

const css = StyleSheet.create({
  conteudo: {
    height:Dimensions.get("window").width/10,
    width:Dimensions.get("window").width-20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#0f0a",
    marginBottom: 2,
    marginTop: 2,
  },
  Titulo: {
    color: "#000",
    fontFamily: "monospace",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
})