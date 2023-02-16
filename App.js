import { StatusBar } from 'expo-status-bar';
import { RadioButton, Switch } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';
import Styles from './styles/Styles.js';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';




export default function App() {
  const [radioval, setRadioval] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [result, setResult] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const colorTheme = isOn ? Styles.darktheme : Styles.ligththeme;
  const ButtonTheme = isOn ? Styles.DarkButton : Styles.Button;
  const resultTheme= result<0.6 ? Styles.aresult :1.5>result>0.6 ? Styles.bresult :Styles.cresult
  function calculate(){
    let grams=(bottles*0.33)*4.5*8
    let burn = weigth/10
    let gramsleft=grams-burn*hours
    let res;
    if(weigth>0){

      if(radioval=='male'){
        res=gramsleft/(weigth*0.7)
      }else{
        res=gramsleft/(weigth*0.6)
      }
      if(res<0){
        res=0
      }
      setResult(res)
    }else
    Alert.alert("Incorrect weigth","Please put a correct weigth")
  }
  
  return (
    <ScrollView style={[Styles.all, colorTheme]}>
      <View style={[Styles.container,colorTheme]}>
        <Text>On/Off</Text>
        <Switch value={isOn} onValueChange={newValue=>setIsOn(newValue)}></Switch>
        <Text style={Styles.header}>Alcometer🍻🍻🍻</Text>
        <Text style={Styles.label}>Weigth:</Text>
        <TextInput 
          keyboardType='number-pad' 
          value={weigth}
          style={Styles.textInput}
          onChangeText={weigth=>setWeigth(weigth)}
        />

        <Text style={Styles.label}>Bottles:</Text>
        <View style={Styles.NumericInput}>
        <NumericInput value={bottles} onChange={bottles => setBottles(bottles)} minValue={0} />
        </View>

        <Text style={Styles.label}>Hours:</Text>
        <NumericInput value={hours} onChange={hours => setHours(hours)} minValue={0} style={Styles.NumericInput}/>


        <RadioButton.Group onValueChange={newValue=>setRadioval(newValue)} value={radioval}>
          <View style={Styles.radioStyle}>
            <RadioButton value='male'/>
              <Text>Male</Text>
          </View>
          <View style={Styles.radioStyle}>
            <RadioButton value='female'/>
              <Text>Female</Text>
          </View>
        </RadioButton.Group>

        <Text style={resultTheme}>{result.toFixed(2)}</Text>

        <Pressable style={ButtonTheme} onPress={calculate}>
          <Text style={Styles.ButtonText}>Calculate</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
