import React, {useState} from 'react';
import {StyleSheet, FlatList} from "react-native";
import {spendCategories} from "../../utils/categories";
import {Button, Input, Layout} from "@ui-kitten/components";
import Screen from "../../components/Screen/Screen";
import Header from "../../components/Header/Header";
import MoneyInput from "../../components/UI/MoneyInput/MoneyInput";
import Calculator from "../../components/Calculator/Calculator";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const SpendingScreen = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const renderItem = ({item}) => {
    return (
      <CategoryCard
        title={item.name}
        color={item.color}
        icon={item.icon}
        onPress={() => addItem()}/>
    );
  };
  const openModal = () => {
    if (amount.length > 0) {
      setVisible(true);
    }
  };
  const addItem = () => {
    navigation.navigate({name: "Main Screen"});
  }

  return (
    <Screen>
      <Layout style={{flex: 1, alignItems: 'center'}} level='2'>
        <Header
          title={'Spend'}
          iconLeft={'arrow-ios-back-outline'}
          actionLeft={() => navigation.goBack()}
        />
        <CategoryModal visible={visible} setVisible={setVisible}>
          <Layout level={'3'} style={{flex: 1, paddingTop: 20}}>
            <FlatList
              numColumns={3}
              data={spendCategories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </Layout>
        </CategoryModal>
        <MoneyInput amount={amount}/>
        <Input
          placeholder='Notice'
          style={styles.input}
          size='large'
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Calculator color={'warning'} setAmount={setAmount} amount={amount}/>
        <Button
          style={styles.button}
          appearance='outline'
          status='warning'
          size='giant'
          onPress={() => openModal()}>
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
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 5,
    marginTop: 'auto',
    marginBottom: 10,
    fontWeight: '700',
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

export default SpendingScreen;
