import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {Button, Input, Layout} from "@ui-kitten/components";
import Screen from "../../components/Screen/Screen";
import Header from "../../components/Header/Header";
import MoneyInput from "../../components/UI/MoneyInput/MoneyInput";
import Calculator from "../../components/Calculator/Calculator";

const IncomeScreen = ({navigation, route}) => {
  const [amount, setAmount] = useState('');
  const [value, setValue] = useState('');
  const selectCategory = () => {
    navigation.navigate('Select Category', {option: 'Income'});
  };

  return (
    <Screen>
      <Layout style={{flex: 1, alignItems: 'center'}} level='2'>
        <Header
          title={'New Income'}
          iconLeft={'arrow-ios-back-outline'}
          actionLeft={() => navigation.goBack()}
        />
        <MoneyInput amount={amount}/>
        <Input
          placeholder='Notice'
          style={styles.input}
          size='large'
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Calculator color={'success'} setAmount={setAmount} amount={amount}/>
        <Button
          style={styles.button}
          appearance='outline'
          status='success'
          size='giant'
          onPress={() => selectCategory()}>
          Select category
        </Button>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  categoryLink: {
    width: '90%',
    textAlign: 'center',
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 5,
    marginTop: 'auto',
    marginBottom: 10
  },
  input: {
    width: '90%',
    marginVertical: 20,
    flex: 1
  },
  button: {
    width: '90%',
    marginVertical: 10
  },
})

export default IncomeScreen;
