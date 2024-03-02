/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

function App(): React.JSX.Element {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAhw0OBa0sshaxB2bh-d0mBVAH3Khrnlyc',
      authDomain: 'authentication-8ecff.firebaseapp.com',
      projectId: 'authentication-8ecff',
      storageBucket: 'authentication-8ecff.appspot.com',
      messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
      appId: '882722301133',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
