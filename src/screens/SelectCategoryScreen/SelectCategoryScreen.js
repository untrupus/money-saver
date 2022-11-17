import React from 'react';
import {StyleSheet, FlatList} from "react-native";
import {Layout} from "@ui-kitten/components";
import {incomeCategories, spendCategories} from "../../utils/categories";
import Screen from "../../components/Screen/Screen";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Header from "../../components/Header/Header";

const SelectCategoryScreen = ({navigation, route}) => {
  const renderItem = ({item}) => {
    return (
      <CategoryCard
        title={item.name}
        color={item.color}
        icon={item.icon}
        onPress={() => console.log(item.id)}/>
    );
  };

  return (
    <Screen>
      <Layout level={'3'} style={{flex: 1}}>
        <Header
          title={
            `Select ${route.params.option ? route.params.option : ''} Category`
          }
          iconLeft={'arrow-ios-back-outline'}
          actionLeft={() => navigation.goBack()}
        />
        <Layout level={'3'} style={{flex: 1, padding: 10}}>
          <FlatList
            numColumns={3}
            data={route.params.option === 'Spend' ? spendCategories : incomeCategories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        </Layout>
      </Layout>
    </Screen>
  );
};

export default SelectCategoryScreen;
