import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity , Dimensions, Image} from 'react-native';

export default function Content() {

  const[calc, setCalc] = useState(
    {
      A:"",
      B:"", 
      R: 0,
    }
  )
  const handleInputChange = (nomeCampo, valorCampo) => {
    setCalc({
        ...calc, [nomeCampo]:valorCampo,
    })
  }
  const Soma = () => {
    setCalc({
        ...calc, R: (calc.A + calc.B) 
    })
  }
  const Sub = () => {
    setCalc({
        ...calc, R: (calc.A - calc.B) 
    })
  }
  const Multi = () => {
    setCalc({
        ...calc, R: (calc.A * calc.B) 
    })
  }
  const Divi = () => {
    setCalc({
        ...calc, R: (calc.A / calc.B) 
    })
  }
  const Rest = () => {
    setCalc({
        ...calc, R: (calc.A % calc.B) 
    })
  }
  const Pot = () => {
    setCalc({
        ...calc, R: (Math.pow(calc.A, calc.B))
    })
  }
  const Clear = () => {
    setCalc({
      A: "", 
      B: "", 
      R: 0, 
    })
  }
   
  return (
    <View style={css.conteudo}>
      <Image source={require('../../assets/img.png')} style={css.logo}/>
      <Text style={css.TextResultado}>{calc.R}</Text>
      <TextInput style={css.TextValores} onChangeText={
        (valorCampo) => handleInputChange("A", Number(valorCampo))
      } keyboardType="numeric" placeholder="Valor A" placeholderTextColor="#0F0a" value={calc.A} />
      
      <TextInput style={css.TextValores} onChangeText={
        (valorCampo) => handleInputChange("B", Number(valorCampo))
      } keyboardType="numeric" placeholder="Valor B" placeholderTextColor="#0F0a" value={calc.B} />

        <TouchableOpacity><Text style={css.Botoes} onPress={Soma}> + </Text></TouchableOpacity>
        <TouchableOpacity><Text style={css.Botoes} onPress={Sub}> - </Text></TouchableOpacity>
        <TouchableOpacity><Text style={css.Botoes} onPress={Multi}> * </Text></TouchableOpacity>
        <TouchableOpacity><Text style={css.Botoes} onPress={Divi}> / </Text></TouchableOpacity>
        <TouchableOpacity><Text style={css.Botoes} onPress={Rest}> % </Text></TouchableOpacity>
        <TouchableOpacity><Text style={css.Botoes} onPress={Pot}> ^ </Text></TouchableOpacity>
        <TouchableOpacity>
          <Text style={css.BotoesLimpar} onPress={Clear}> Limpar </Text>
        </TouchableOpacity>
    </View>
  );
}


const css = StyleSheet.create({
  conteudo:{
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  logo: {
    width: Dimensions.get("window").width-100,
    resizeMode: "contain",
  },
  TextResultado: {
    width: Dimensions.get("window").width-21,
    height: Dimensions.get("window").width/4,
    borderColor: "#0F0",
    borderWidth: 2,
    padding: 5,
    margin: 2,
    color: "#0F0",
    fontSize: 24,
    fontFamily: "monospace",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  TextValores: {
    width: (Dimensions.get("window").width - 25)/2,
    height: Dimensions.get("window").width/4,
    borderColor: "#0F0",
    borderWidth: 2,
    padding: 5,
    margin: 2,
    color: "#0F0",
    fontSize: 24,
    fontFamily: "monospace",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  Botoes: {
    height:Dimensions.get("window").width/3 - 10,
    width:Dimensions.get("window").width/3 - 10,
    padding: 20,
    margin: 2,
    backgroundColor: "#0f0a",
    color: "#000",
    fontFamily: "monospace",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  BotoesLimpar: {
    height:Dimensions.get("window").width/3 - 10,
    width:Dimensions.get("window").width - 25,
    padding: 20,
    margin: 2,
    backgroundColor: "#0f0a",
    color: "#000",
    fontFamily: "monospace",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  }
}
)