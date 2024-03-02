import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import Auth from '../../services/auth';

const Home = () => {
  return (
    <View style={{flex: 1, padding: 20, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
      <CustomButton
        text="Sign Out"
        onPress={() => Auth.signOut()}
        bgColor="red"
      />
    </View>
  );
};

export default Home;
