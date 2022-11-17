import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import {Layout} from "@ui-kitten/components";
import Header from "../Header/Header";

const CategoryModal = ({visible, children, setVisible}) => {
  return (
    <Layout level={'3'} style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}>
        <Layout level={'3'} style={styles.centeredView}>
          <Header
            title={'Select category'}
            iconLeft={'arrow-ios-back-outline'}
            actionLeft={() => setVisible(false)}
          />
          {children}
        </Layout>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryModal;
