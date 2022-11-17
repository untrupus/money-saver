import React from 'react';
import {Image, StyleSheet} from "react-native";
import {Layout, Text} from "@ui-kitten/components";

const Logo = () => {
  return (
    <Layout style={styles.logoContainer} level='3'>
      <Image source={require('../../../assets/misc/logo.png')} style={styles.logo}/>
      <Text category='h4'>Money Saver</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    height: 100,
    width: 100
  },
});

export default Logo;
