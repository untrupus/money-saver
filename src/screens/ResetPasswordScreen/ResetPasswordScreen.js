import React, {useState} from 'react';
import axios from 'axios';
import {StyleSheet, Keyboard} from "react-native";
import {Layout, Button, Text, Icon, Input, Modal} from "@ui-kitten/components";
import Screen from "../../components/Screen/Screen";
import Preloader from "../../components/Preloader/Preloader";

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [preloader, setPreloader] = useState(false);

  const resetPassword = () => {
    if (email !== '') {
      setPreloader(true);
      axios.post('http://localhost:1337/auth/forgot-password', {
        email,
        url: 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password',
      })
        .then(response => {
          setPreloader(false);
          console.log('Your user received an email');
        })
        .catch(error => {
          setPreloader(false);
          console.log('An error occurred:', error.response);
        });
    }
  };

  return (
    <Screen>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>

      </Modal>
      <Preloader visible={preloader}/>
      <Layout level={'3'} style={styles.container}>
        <Text category={'h4'} style={{marginBottom: 10}}>
          Forgot password?
        </Text>
        <Text category={'c1'} style={{marginBottom: 20}}>
          We will send you a confirmation email
        </Text>
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
        <Button
          style={styles.button}
          onPress={() => Keyboard.dismiss()}
          size='large'>
          Reset Password
        </Button>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 15
  },
  input: {
    width: '90%',
    marginBottom: 10,
    flex: 1
  },
  button: {
    width: '90%',
    marginBottom: 10
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ResetPasswordScreen;
