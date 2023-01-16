import { StatusBar } from 'expo-status-bar';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';
import Styles from './styles/Styles.js';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [radioval, setRadioval] = useState('male');
  
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.header}>Alcometer</Text>
        <Text style={Styles.label}>Weigth:</Text>
        <TextInput 
          keyboardType='number-pad' 
          
          style={Styles.textInput}
        
        />

        <Text style={Styles.label}>Bottles:</Text>
        <NumericInput onChange={value => console.log(value)} minValue={0}/>

        <Text style={Styles.label}>Hours:</Text>
        <NumericInput onChange={value => console.log(value)} minValue={0}/>


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

        <Text style={Styles.result}>test</Text>
        <Button title='Calculate' style={Styles.button}/>
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
