import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/TextInput';
import {useNavigation} from '@react-navigation/native';
import {BottomTab} from '../../../navigation/stacks/bottomTab';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = () => {
    if (!username || !password) {
      setPasswordError(password ? '' : 'Password is required');
      setUsernameError(username ? '' : 'Username is required');
    } else {
      setUsernameError('');
      setPasswordError('');
      console.log('Form submitted');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  };

  const handleUsernameChange = (text: string) => {
    if (/^[0-9]*$/.test(text)) {
      setUsername(text);
      setUsernameError('');
    } else {
      setUsernameError('Username should contain only numbers');
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <View style={styles.inputContainer}>
        <CustomTextInput
          label="Username"
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="Enter your username"
          error={usernameError}
        />
        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Enter your password"
          error={passwordError}
          secureTextEntry={true}
        />
      </View>

      <CustomButton title="Login" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'EBGaramond-Bold',
    color: 'purple',
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    marginTop: 'auto',
    width: '100%',
  },
});

export default Login;
