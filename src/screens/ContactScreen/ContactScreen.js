import React from 'react';
import {StyleSheet} from "react-native";
import {Layout, Text, Input, Button} from "@ui-kitten/components";

const ContactScreen = () => {
  return (
      <Layout level={'3'} style={{flex: 1, paddingHorizontal: 10, paddingVertical: 20}}>
        <Layout level={'3'} style={{flex: 1, alignItems: 'center'}}>
          <Text style={{marginBottom: 20}}>Send us an email</Text>
          <Input
            style={styles.input}
            size='large'
            placeholder='Message subject'
          />
          <Input
            style={styles.input}
            size='large'
            placeholder='Your email address'
          />
          <Input
            multiline={true}
            textStyle={{ minHeight: 64 }}
            placeholder='Message text'
          />
        </Layout>
        <Button size='large'>
          Send
        </Button>
      </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20
  }
});

export default ContactScreen;
