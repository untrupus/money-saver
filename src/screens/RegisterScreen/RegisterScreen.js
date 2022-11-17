import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/actions";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Layout, Text, Button, Input, Icon} from "@ui-kitten/components";
import {Link} from "@react-navigation/native";
import Screen from "../../components/Screen/Screen";
import Logo from "../../components/UI/Logo/Logo";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const register = () => {
    dispatch(registerUser({username, email, password}));
  };

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
            placeholder='Name'
            value={username}
            onChangeText={nextValue => setUsername(nextValue)}
            style={styles.input}
            accessoryLeft={
              <Icon
                fill='#8F9BB3'
                name='person-outline'
              />
            }
            size='large'/>
          <Input
            placeholder='Email'
            value={email}
            onChangeText={nextValue => setEmail(nextValue)}
            style={styles.input}
            accessoryLeft={
              <Icon
                fill='#8F9BB3'
                name='email-outline'
              />
            }
            size='large'/>
          <Input
            placeholder='Password'
            value={password}
            onChangeText={nextValue => setPassword(nextValue)}
            secureTextEntry={secureTextEntry}
            style={styles.input}
            accessoryLeft={renderIcon}
            size='large'/>
          <Button
            style={styles.button}
            onPress={() => register()}
            size='large'>
            Register
          </Button>
          <Layout style={styles.linkContainer} level={'3'}>
            <Text>Already have an account?</Text>
            <Link to={{screen: 'Login'}} style={styles.link}>
              <Text status='primary'>Click here</Text>
            </Link>
          </Layout>
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
    paddingBottom: 15
  },
  input: {
    width: '90%',
    marginBottom: 10
  },
  button: {
    width: '90%',
    marginBottom: 10
  },
  linkContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    marginLeft: 10
  }
});

export default RegisterScreen;
