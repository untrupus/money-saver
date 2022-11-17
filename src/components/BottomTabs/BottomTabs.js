import React from 'react';
import {StyleSheet} from "react-native";
import { Layout, Icon } from '@ui-kitten/components';
import {Link} from '@react-navigation/native';

const BottomTabs = () => {
  return (
    <Layout style={styles.bottomTabsContainer} level='4'>
      <Layout style={styles.buttonsContainer} level='4'>
        <Link to={{ screen: 'SpendScreen' }}>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='minus-circle-outline'
          />
        </Link>
        <Link to={{ screen: 'IncomeScreen' }}>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='plus-circle-outline'
          />
        </Link>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  bottomTabsContainer: {
    height: 70,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: "space-around",
    alignItems: 'center'
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default BottomTabs;
