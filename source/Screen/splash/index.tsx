import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import StanderBtn from '../../component/standerBtn';

const image = {
  uri: 'https://media.istockphoto.com/id/1367076648/photo/woman-with-backpack-on-suspension-bridge-in-rainforest.jpg?b=1&s=170667a&w=0&k=20&c=sMshEML6qaCSWGZVxjO-ac71ktL6q_zqTso2In9oEog=',
};

const Home = () => {
  const navigation = useNavigation();
  const goToNext = () => {
    navigation.navigate('Start');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.innerrContainer}>
          <View style={styles.topText}>
            <Text style={styles.logo}>Logo</Text>
            <Text style={styles.title}>Trivel Guid</Text>
            <Text style={styles.heading}>Find Your best plan...</Text>
          </View>
          <View>
            <TouchableOpacity onPress={goToNext}>
              <StanderBtn title="Click me" />
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.login}>Already hava a daf ? </Text>
              <Text style={styles.login}>Login</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  innerrContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 70,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
  },
  topText: {
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'yellow',
    padding: 10,
    color: '#000',
    paddingVertical: 14,
    borderRadius: 10,
  },
  title: {
    color: '#ffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 6,
  },
  heading: {
    color: '#ffff',
    fontSize: 20,
  },
  login: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 15,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
});

export default Home;
