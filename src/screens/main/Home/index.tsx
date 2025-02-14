import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import CustomCard from '../../../components/CustomCard';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
import CustomToast from '../../../components/Toast';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAction = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setToastMessage('Action Completed Successfully');
      setTimeout(() => {
        setToastMessage('');
      }, 3000);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Home</Text>

      <CustomCard
        title="Welcome Card"
        description="This is a custom card component with details."
      />

      {loading && (
        <CustomActivityIndicator isLoading={true} message="Loading..." />
      )}

      <Button title="Perform Action" onPress={handleAction} />

      {toastMessage ? <CustomToast message={toastMessage} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
