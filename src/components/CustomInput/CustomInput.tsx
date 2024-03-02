import React from 'react';
import {Controller} from 'react-hook-form';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface CustomInputProps {
  name: string;
  control: any;
  placeholder: string;
  secureTextEntry?: boolean;
  rules?: {
    required?: boolean | string;
    minLength?: number | {value: number; message: string};
    maxLength?: number | {value: number; message: string};
    pattern?: string | {value: RegExp; message: string};
    validate?: (value: string) => void;
  };
}

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
