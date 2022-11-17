import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DrawerActions} from '@react-navigation/native'

import Screen from "../components/Screen/Screen";
import Header from "../components/Header/Header";
import MainScreen from "../screens/MainScreen/MainScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen/AllCategoriesScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import DrawerContent from "../components/DrawerContent/DrawerContent";

const Drawer = createDrawerNavigator();

const MainNavigation = ({navigation}) => {
  const sideMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  };
  return (
    <Screen>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <DrawerContent {...props} />}
        backBehavior={MainScreen}
        screenOptions={{
          header: () => {
            return (
              <Header
                title={'Money Saver'}
                iconLeft={'menu-outline'}
                actionLeft={() => sideMenu()}
              />
            )
          }
        }}>
        <Drawer.Screen name="Main Screen" component={MainScreen}/>
        <Drawer.Screen name="Categories" component={AllCategoriesScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="Contact" component={ContactScreen}/>
      </Drawer.Navigator>
    </Screen>
  );
};

export default MainNavigation;
