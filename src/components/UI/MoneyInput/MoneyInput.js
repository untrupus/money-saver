import React from 'react';
import {StyleSheet} from "react-native";
import {Layout, Text} from "@ui-kitten/components";
import { FontAwesome5 } from '@expo/vector-icons';

const MoneyInput = ({amount}) => {
  return (
    <Layout style={styles.inputContainer} level='4'>
      <FontAwesome5 name="money-bill-wave" size={24} color='#8F9BB3' />
      <Layout style={styles.amountContainer} level='4'>
        <Text style={styles.amount}>{amount}</Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  amountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
  }
});

export default MoneyInput;
