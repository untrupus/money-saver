import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Layout, Tab, TabView, Button} from '@ui-kitten/components';
import {spendCategories, incomeCategories} from "../../utils/categories";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const AllCategoriesScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectCategory = (option) => {
    navigation.navigate('Add Category', {option})
  }
  const goToEditCategory = (id) => {
    navigation.navigate('Add Category', {id})
  }
  const renderItem = ({item}) => {
    return (
      <CategoryCard
        title={item.name}
        color={item.color}
        icon={item.icon}
        onPress={() => goToEditCategory(item.id)}/>
    );
  };

  return (
    <TabView
      style={{flex: 1}}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab title='Spend' style={{paddingVertical: 10}}>
        <Layout style={{flex: 1, padding: 10}} level={'3'}>
          <Layout style={{flex: 1, paddingVertical: 10}} level={'3'}>
            <FlatList
              numColumns={3}
              style={styles.buttons}
              data={spendCategories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </Layout>
          <Button
            style={styles.button}
            appearance='filled'
            status='primary'
            size='giant'
            onPress={() => selectCategory('spend')}>
            Add category
          </Button>
        </Layout>
      </Tab>
      <Tab title='Income' style={{paddingVertical: 10}}>
        <Layout style={{flex: 1, padding: 10}} level={'3'}>
          <Layout style={{flex: 1, padding: 10}} level={'3'}>
            <FlatList
              numColumns={3}
              style={styles.buttons}
              data={incomeCategories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </Layout>
          <Button
            // style={styles.button}
            appearance='filled'
            status='primary'
            size='giant'
            onPress={() => selectCategory('income')}>
            Add category
          </Button>
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: '100%'
  }
});

export default AllCategoriesScreen;
