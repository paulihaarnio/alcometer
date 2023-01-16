import { StatusBar } from 'expo-status-bar';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';
import Styles from './styles/Styles.js';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';



export default function App() {
  const [radioval, setRadioval] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [result, setResult] = useState(0);
  function calculate(){
    let grams=(bottles*0.33)*4.5*8
    let burn = weigth/10
    let gramsleft=grams-burn*hours
    if(radioval=='male'){
      setResult(gramsleft/(weigth*0.7))
    }else{
      setResult(gramsleft/(weigth*0.6))
    }
  }
  
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.header}>Alcometer</Text>
        <Text style={Styles.label}>Weigth:</Text>
        <TextInput 
          keyboardType='number-pad' 
          value={weigth}
          style={Styles.textInput}
          onChangeText={weigth=>setWeigth(weigth)}
        />

        <Text style={Styles.label}>Bottles:</Text>
        <NumericInput value={bottles} onChange={bottles => setBottles(bottles)} minValue={0}/>

        <Text style={Styles.label}>Hours:</Text>
        <NumericInput value={hours} onChange={hours => setHours(hours)} minValue={0}/>


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

        <Text style={Styles.result}>{result.toFixed(2)}</Text>
        <Button title='Calculate' style={Styles.button} onPress={calculate}/>
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
