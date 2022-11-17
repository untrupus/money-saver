import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from "./src/store/reducer";
import {useSelector, useDispatch} from "react-redux";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {getData} from "./src/store/secureStore";
import {setUser} from "./src/store/actions";
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import AuthNavigation from "./src/navigation/AuthNavigation";
import MainNavigation from "./src/navigation/MainNavigation";
import IncomeScreen from "./src/screens/IncomeScreen/IncomeScreen";
import SpendingScreen from "./src/screens/SpendingScreen/SpendingScreen";
import SelectCategoryScreen from "./src/screens/SelectCategoryScreen/SelectCategoryScreen";
import AddCategoryScreen from "./src/screens/AddCategoryScreen/AddCategoryScreen";

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const AppWrapper = () => {
  const theme = useSelector(state => state.theme);
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <App/>
      </ApplicationProvider>
    </>
  )
};

const ProviderWrapper = () => {
  return (
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  )
}

const App = () => {
  const user = useSelector(state => state.user);

  const splash = useSelector(state => state.splash);
  const dispatch = useDispatch();
  useEffect(() => {
      getData().then((user) => {
        dispatch(setUser(user))
      });
  }, []);

  if (!splash) {
    return (
      <NavigationContainer>
        {!user ? <AuthNavigation/> :
          <Stack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
          }}>
            <Stack.Screen name='Main' component={MainNavigation}/>
            <Stack.Screen name='IncomeScreen'
                          component={IncomeScreen}
                          options={{gestureDirection: 'horizontal'}}/>
            <Stack.Screen name='SpendScreen'
                          component={SpendingScreen}
                          options={{gestureDirection: 'horizontal'}}/>
            <Stack.Screen name='Add Category'
                          component={AddCategoryScreen}
                          options={{gestureDirection: 'vertical'}}/>
            <Stack.Screen name='Select Category'
                          component={SelectCategoryScreen}
                          options={{gestureDirection: 'vertical'}}/>
          </Stack.Navigator>}
      </NavigationContainer>
    )
  } else return <SplashScreen/>
};

export default ProviderWrapper;


