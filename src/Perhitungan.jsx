import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (button) => {
    if (button === '=') {
      calculateResult();
    } else if (button === 'C') {
      clearDisplay();
    } else if (button === 'x') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (button === '%') {
      handlePercentage();
    } else if (button === '.') {
      handleDot();
    } else {
      setInput((prevInput) => prevInput + button);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(parseFloat(result.toFixed(10)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearDisplay = () => {
    setInput('');
  };

  const handlePercentage = () => {
    try {
      const inputValue = parseFloat(input);
      const result = inputValue / 100;
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleDot = () => {
    if (!input.includes('.')) {
      setInput((prevInput) => prevInput + '.');
    }
  };

  const renderButton = (button) => (
    <TouchableOpacity key={button} style={styles.button} onPress={() => handleButtonPress(button)}>
      <Text style={styles.buttonText}>{button}</Text>
    </TouchableOpacity>
  );

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+',
    'x', '%', '.'

  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map(renderButton)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#d3d3d3',
    padding: 20,
  },
  displayText: {
    fontSize: 40,
    color: '#000',
  },
  buttonsContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
  },
});

export default App;
