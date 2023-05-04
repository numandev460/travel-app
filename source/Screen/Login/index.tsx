import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import React from 'react';
import BtnGroup from '../../component/btnGroup';

const Login = () => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Login</Text>
      <BtnGroup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: 8,
  },
});

export default Login;
