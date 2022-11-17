import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addCategory} from "../../store/actions";

import {FlatList, StyleSheet, TouchableOpacity} from "react-native";
import {Layout, Text, Input, Button, Radio, RadioGroup} from "@ui-kitten/components";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Screen from "../../components/Screen/Screen";
import Header from "../../components/Header/Header";

import {icons} from "../../utils/icons";

const AddCategoryScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [icon, setIcon] = useState('');
  const colors = ['primary', 'success', 'info', 'warning', 'danger', 'basic'];
  const addCategoryHandler = () => {
    if (name !== '' && icon !== '') {
      dispatch(addCategory({name, icon, color: colors[selectedIndex], value: route.params.option}));
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.iconItem} onPress={() => setIcon(item)}>
        <Layout level={icon === item ? '1' : '3'} style={[styles.iconItemInner, {borderColor: icon === item ? 'green' : '#8F9BB3'}]}>
          <MaterialCommunityIcons
            name={item}
            size={icon === item ? 32 : 24}
            color='#8F9BB3'/>
        </Layout>
      </TouchableOpacity>
    )
  };

  return (
    <Screen>
      <Layout style={{flex: 1}} level={'3'}>
        <Header
          title={
            `${route.params.id ? 'Edit' : 'Add'} ${route.params.option ? route.params.option : ''} category`
          }
          iconLeft={'arrow-ios-back-outline'}
          actionLeft={() => navigation.goBack()}
        />
        <Layout level={'3'} style={styles.addCategoryContainer}>
          <Input
            placeholder='Category title'
            value={name}
            style={{width: '90%'}}
            size='large'
            onChangeText={nextValue => setName(nextValue)}
          />
          <Text style={{paddingVertical: 15}}>Select icon</Text>
          <Layout level={'1'} style={styles.iconContainer}>
            <FlatList
              numColumns={5}
              showsVerticalScrollIndicator={false}
              data={icons}
              renderItem={renderItem}
              keyExtractor={item => item}
              contentContainerStyle={{flexGrow: 1}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </Layout>
          <Text style={{paddingVertical: 15}}>Select color</Text>
          <RadioGroup
            style={styles.colorsContainer}
            selectedIndex={selectedIndex}
            onChange={index => setSelectedIndex(index)}>
            <Radio status={'primary'}/>
            <Radio status={'success'}/>
            <Radio status={'info'}/>
            <Radio status={'warning'}/>
            <Radio status={'danger'}/>
            <Radio status={'basic'}/>
          </RadioGroup>
          <Button
            onPress={() => addCategoryHandler()}
            style={styles.button}>
            {route.params.id ? 'Edit' : 'Add'}
          </Button>
        </Layout>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  addCategoryContainer: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center'
  },
  iconContainer: {
    flex: 1,
    width: '90%',
    borderRadius: 10,
    padding: 10
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-around',
    paddingBottom: 15
  },
  button: {
    width: '90%'
  },
  iconItem: {
    width: '18%',
    marginBottom: 10,
  },
  iconItemInner: {
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    borderWidth: 1,
  }
});

export default AddCategoryScreen;
