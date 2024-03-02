import auth from '@react-native-firebase/auth';

const signUp = async ({name, email, password}) => {
  await auth().createUserWithEmailAndPassword(email.trim(), password);
  auth().currentUser.updateProfile({
    displayName: name,
  });
  return console.warn('Usuário cadastrado com sucesso!');
};

const signIn = async ({email, password}) => {
  try {
    await auth().signInWithEmailAndPassword(email.trim(), password);
    return console.warn('Bem vindo!');
  } catch (err) {
    return console.warn('Usuário não cadastrado!');
  }
};

const signOut = () => {
  return auth().signOut();
};

const Auth = {
  signUp,
  signIn,
  signOut,
};

export default Auth;
