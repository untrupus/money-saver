import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/actions";

import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Layout, Text, Input, Button, Icon} from "@ui-kitten/components";
import {Link} from "@react-navigation/native";
import Screen from '../../components/Screen/Screen';
import Logo from "../../components/UI/Logo/Logo";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const login = () => {
    dispatch(loginUser({identifier, password}));
  }

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  return (
    <Screen>
      <Layout style={styles.loginScreen} level={'3'}>
        <Logo/>
        <Layout style={{width: '100%', alignItems: 'center'}} level={'3'}>
          <Input
            style={styles.input}
            value={identifier}
            onChangeText={nextValue => setIdentifier(nextValue)}
            placeholder='Email'
            accessoryLeft={
              <Icon
                fill='#8F9BB3'
                name='email-outline'
              />
            }
            status='info'
            size='large'/>
          <Input
            style={styles.input}
            value={password}
            onChangeText={nextValue => setPassword(nextValue)}
            placeholder='Password'
            accessoryLeft={renderIcon}
            status='info'
            secureTextEntry={secureTextEntry}
            size='large'/>
          <Button
            style={styles.button}
            size='large'
            onPress={() => login()}>
            Login
          </Button>
          <Layout style={styles.linkContainer} level={'3'}>
            <Text>New User?</Text>
            <Link to={{screen: 'Register'}} style={styles.link}>
              <Text status='primary' category='s1'>
                Register now!
              </Text>
            </Link>
          </Layout>
          <Link to={{screen: 'Reset Password'}} style={{marginVertical: 15}}>
            <Text status='primary'>Forgot password?</Text>
          </Link>
        </Layout>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 10
  },
  input: {
    marginBottom: 10,
    width: '90%'
  },
  button: {
    marginBottom: 10,
    width: '90%'
  },
  linkContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  link: {
    marginLeft: 10,
  }
});

export default LoginScreen;
