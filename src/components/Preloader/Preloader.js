import React from 'react';
import {StyleSheet} from "react-native";
import {Modal, Spinner} from "@ui-kitten/components";

const Preloader = ({visible}) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}>
      <Spinner/>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Preloader;
