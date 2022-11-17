import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Icon, Text, Layout} from "@ui-kitten/components";

const Header = ({title, iconLeft, iconRight, actionLeft, actionRight}) => {
  return (
    <Layout style={styles.header} level='4'>
      {actionLeft && <TouchableWithoutFeedback onPress={() => actionLeft()}>
        <View style={[styles.headerIcon, {left: 0}]}>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name={iconLeft}
          />
        </View>
      </TouchableWithoutFeedback>}
      <Text style={styles.headerTitle}>{title}</Text>
      {actionRight && <TouchableWithoutFeedback onPress={() => actionRight()}>
        <View style={[styles.headerIcon, {right: 0}]}>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='menu-outline'
          />
        </View>
      </TouchableWithoutFeedback>}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700'
  },
  headerIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Header;
