import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const StanderBtn = (props: {title: any}) => {
  const {title} = props;
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#006400', // dark green
    borderRadius: 15,
    padding: 10,
    paddingVertical: 12,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StanderBtn;
