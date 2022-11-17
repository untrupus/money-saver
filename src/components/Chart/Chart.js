import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from "@ui-kitten/components";

const Chart = () => {


  return (
    <Layout level='2' style={styles.chart}>

    </Layout>
  );
};

const styles = StyleSheet.create({
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 20,
    padding: 20,
    marginVertical: 15,
    position: 'relative'
  },
  round: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 100,
    top: '50%',
    transform: [{translateY: -75}]
  },
  amount: {
    top: '50%',
    fontSize: 20
  }
});

export default Chart;
