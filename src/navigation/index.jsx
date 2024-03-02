/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import App from './app';
import Auth from './auth';

const Navigation = () => {
  const [initializing, setinitializing] = useState();
  const [user, setUser] = useState();

  const onAuthStateChange = user => {
    setUser(user);
    if (initializing) {
      setinitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return <NavigationContainer>{user ? <App /> : <Auth />}</NavigationContainer>;
};

export default Navigation;
