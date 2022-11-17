import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Icon, List, ListItem } from '@ui-kitten/components';
import BottomTabs from "../../components/BottomTabs/BottomTabs";
import Chart from "../../components/Chart/Chart";

const MainScreen = () => {
  const data = new Array(8).fill({
    title: 'Title for Item',
  });
  const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      accessoryLeft={renderItemIcon}
    />
  );

  return (
    <Layout style={{flex: 1, alignItems: 'center'}} level='3'>
      <Layout style={{flex: 1, width: '100%', alignItems: 'center'}} level='3'>
        <Chart/>
        <Layout level='3' style={styles.list}>
          <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
          />
        </Layout>
      </Layout>
      <BottomTabs/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
    width: '100%',

  },
  list: {
    width: '90%',
    borderRadius: 20,
    overflow: 'hidden'
  }
});

export default MainScreen;
