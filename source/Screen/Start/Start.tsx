import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BorderBtn from '../../component/borderBtn';
import StanderBtn from '../../component/standerBtn';

const image = {
  uri: 'https://media.istockphoto.com/id/580120988/photo/relaxed-female-hiker-standing-by-the-stream.jpg?s=612x612&w=0&k=20&c=mivV-VCYbA9RnHYkq1eBSlMRtXUuCPCXTdz-Jhd_5_E=',
};

const Start = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.innerrContainer}>
          <View style={styles.topText}>
            <Text style={styles.title}>Plan Your Trips</Text>
            <Text style={styles.heading}>onnect with other trivellers</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.BorderBtn} onPress={goToLogin}>
              <StanderBtn title="Log in" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BorderBtn title="Create a Account" />
            </TouchableOpacity>
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
  title: {
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 6,
  },
  heading: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  BorderBtn: {
    marginBottom: 30,
  },
});

export default Start;
