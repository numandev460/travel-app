import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const BorderBtn = (props: {title: any}) => {
  const {title} = props;
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff', // dark green
    borderRadius: 15,
    padding: 10,
    paddingVertical: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BorderBtn;
