import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Layout, Button} from "@ui-kitten/components";

const Calculator = ({setAmount, color, amount}) => {
  const operators = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', "C"];
  const setAmountHandler = (value) => {
    if (value === 'C' && amount.length >= 1) {
      const newValue = amount.slice(0,-1);
      setAmount(newValue);
    } else if (value === '.' && amount.indexOf('.') > -1) {
      setAmount(amount);
    } else if (value === '.' && amount.length === 0) {
      setAmount(amount);
    } else if (value === '0' && amount[0] === '0' && amount.length === 1) {
      setAmount(amount);
    } else if (value === '0' && amount[0] === '0' && amount[1] === '.') {
      setAmount(amount + value);
    } else if (value === '0' && amount[0] !== '0') {
      setAmount(amount + value);
    } else if (value !== '0' && value !== '.' && amount[0] === '0' && amount.length === 1) {
      setAmount(amount);
    } else {
      setAmount(amount + value);
    }
  }

  const Item = ({title}) => (
    <Button
      style={styles.button}
      onPress={() => setAmountHandler(title)}
      appearance='outline'
      size='giant'
      status={color}>
      {title}
    </Button>
  );

  const renderItem = ({item}) => (
    <Item title={item}/>
  );

  return (
    <Layout style={styles.calculatorContainer} level='2'>
      <FlatList
        numColumns={3}
        style={styles.buttons}
        data={operators}
        renderItem={renderItem}
        keyExtractor={item => item}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{flexGrow: 1}}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    alignItems: 'flex-end',
    width: '90%',
  },
  buttons: {
    width: '100%',
  },
  button: {
    width: '30%',
    marginVertical: 10,
  },
  itemText: {
    fontSize: 27,
  }
});

export default Calculator;
