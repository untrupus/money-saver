import React, {useRef, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Animated, StyleSheet} from 'react-native';
import {Layout} from "@ui-kitten/components";
import {setSplashScreen} from "../../store/actions";
import Logo from "../../components/UI/Logo/Logo";
import Screen from "../../components/Screen/Screen";

const SplashScreen = () => {
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const toTop = useRef(new Animated.Value(350)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1200,
    }).start();
    Animated.sequence([
      Animated.delay(1200),
      Animated.timing(toTop, {
        useNativeDriver: true,
        toValue: 150,
        duration: 300
      })
    ]).start();
    setTimeout(() => {
      dispatch(setSplashScreen(false))
    }, 1500)
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Screen>
      <Layout style={styles.container} level={'3'}>
        <Animated.View style={[styles.fadingContainer, {opacity: fadeAnim}, {transform: [{translateY: toTop}]}]}>
          <Logo/>
        </Animated.View>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fadingContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SplashScreen;
