import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CustomCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CustomCard;
