import {View, Text, StyleSheet} from 'react-native';
import SendSvg from '../../assact/facebook.svg';
import React from 'react';

const BtnGroup = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.Section}>
        <SendSvg />
        <Text style={styles.Text}>Twiter</Text>
        <Text style={styles.Text}>Twiter</Text>
      </View>
      <View style={styles.Section}>
        <Text style={styles.Text}>Twiter</Text>
        <Text style={styles.Text}>Twiter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  Section: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 10,
    margin: 5,
  },
  Text: {
    color: '#fff',
    padding: 5,
  },
});

export default BtnGroup;
