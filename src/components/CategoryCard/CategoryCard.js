import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CategoryCard = ({title, color, onPress, icon}) => {
  return (
    <TouchableOpacity style={{width: '30%'}} onPress={onPress}>
      <Layout level={'1'} style={[styles.card, {borderTopColor: color}]}>
        <MaterialCommunityIcons name={icon} size={30} color={color} style={styles.icon} />
        <Text>{title}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    marginVertical: 'auto',
    borderTopWidth: 3,
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 5
  }
});

export default CategoryCard;
