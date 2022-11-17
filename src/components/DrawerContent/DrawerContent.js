import React from 'react';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StyleSheet} from "react-native";
import {DrawerActions} from "@react-navigation/native";
import {Layout, Icon, Drawer, DrawerItem, IndexPath, Divider} from '@ui-kitten/components';
import Logo from "../UI/Logo/Logo";

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      dispatch(logoutUser());
    }
    catch(exception) {
      // error
    }
  }

  const MainIcon = (props) => (
    <Icon {...props} name='grid-outline'/>
  );
  const CategoryIcon = (props) => (
    <Icon {...props} name='layers-outline'/>
  );
  const SettingsIcon = (props) => (
    <Icon {...props} name='settings-2-outline'/>
  );
  const MailIcon = (props) => (
    <Icon {...props} name='email-outline'/>
  );
  const LogoutIcon = (props) => (
    <Icon {...props} name='log-out-outline'/>
  );

  return (
    <Layout level={'3'} style={{flex: 1, paddingTop: 30}}>
      <Logo/>
      <Divider style={{backgroundColor : '#8F9BB3'}}/>
      <Drawer
        style={{flex: 1,}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <DrawerItem
          title='Main Screen'
          accessoryLeft={MainIcon}
          onPress={() => props.navigation.navigate('Main Screen')}/>
        <DrawerItem
          title='Categories'
          selected={{color: '#ffffff'}}
          accessoryLeft={CategoryIcon}
          onPress={() => props.navigation.navigate('Categories')}/>
        <DrawerItem
          title='Settings'
          accessoryLeft={SettingsIcon}
          onPress={() => props.navigation.navigate('Settings')}/>
        <DrawerItem
          title='Contact the support team'
          accessoryLeft={MailIcon}
          onPress={() => props.navigation.navigate('Contact')}/>
        <DrawerItem
          title='Logout'
          accessoryLeft={LogoutIcon}
          onPress={() => logout()}/>
      </Drawer>
      <Divider style={{backgroundColor : '#8F9BB3'}}/>
      <Icon
        style={styles.icon}
        fill='#8F9BB3'
        name='close-circle-outline'
        size='large'
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    marginVertical: 15,
    marginRight: 15,
    marginLeft: 'auto'
  },
})

export default DrawerContent;
