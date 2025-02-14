import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';

interface CustomActivityIndicatorProps {
  isLoading: boolean;
  message?: string;
  color?: string;
  size?: 'small' | 'large';
}

const CustomActivityIndicator: React.FC<CustomActivityIndicatorProps> = ({
  isLoading,
  message = 'Loading...',
  color = '#663399',
  size = 'large',
}) => {
  if (!isLoading) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={size} color={color} />
        {message && <Text style={styles.text}>{message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  loaderContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomActivityIndicator;
