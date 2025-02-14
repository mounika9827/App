import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface CustomTextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: object;
  error?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ label, value, onChangeText, placeholder, secureTextEntry, style, error }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.errorInput]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    width: '100%', // Make input take up the full width
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    marginHorizontal: 10,

    color: '#333',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomTextInput;
