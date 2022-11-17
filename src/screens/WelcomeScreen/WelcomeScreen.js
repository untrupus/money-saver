import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated} from "react-native";
import {Layout, Button} from "@ui-kitten/components";
import Screen from "../../components/Screen/Screen";
import Logo from "../../components/UI/Logo/Logo";

const WelcomeScreen = ({navigation}) => {
  const fromBottom = useRef(new Animated.Value(200)).current;
  const fromBottomAnimation = () => {
    Animated.timing(fromBottom, {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
    }).start();
  };
  useEffect(() => {
    fromBottomAnimation();
  }, [])

  return (
    <Screen>
      <Layout style={styles.welcomeScreen} level={'3'}>
        <Logo/>
        <Animated.View style={[styles.fadingContainer, {transform: [{translateY: fromBottom}]}]}>
          <Layout style={styles.links} level={'3'}>
            <Button
              style={styles.link}
              size='giant'
              status='success'
              onPress={() => navigation.navigate({name: 'Login'})}
            >
              Login
            </Button>
            <Button
              style={styles.link}
              size='giant'
              status='info'
              onPress={() => navigation.navigate({name: 'Register'})}
            >
              Register
            </Button>
          </Layout>
        </Animated.View>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 150
  },
  links: {
    width: '90%',
    marginBottom: 10,
  },
  fadingContainer: {
    width: '100%',
    alignItems: 'center'
  },
  link: {
    fontWeight: '700',
    fontSize: 24,
    marginVertical: 10
  }
})

export default WelcomeScreen;
