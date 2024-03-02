import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign out
      </Text>
    </View>
  );
};

export default Home;
