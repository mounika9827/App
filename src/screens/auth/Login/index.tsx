import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
import CustomToast from '../../../components/Toast';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Heading Text */}
      <Text style={styles.text}>Login</Text>

      {/* Login Button */}
      <CustomButton
        title="Login"
        onPress={() => console.log('Button Pressed')}
      />

      {/* Cards Section */}
      {/* <View style={styles.cardContainer}>
        <CustomCard
          title="Card Title"
          description="This is a custom card component."
        /> */}

        {/* <CustomCard title="Another Card">
          <View style={styles.customContent}>
            <Text>Custom Content Inside</Text>
          </View>
        </CustomCard> */}
        <CustomActivityIndicator isLoading={true} message="Order Placed" />
        {/* <CustomToast message='Ok you can proceed'/> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'EBGaramond-Italic',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardContainer: {
    width: '100%',
    marginTop: 20,
  },
  customContent: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 8,
  },
});

export default Login;
