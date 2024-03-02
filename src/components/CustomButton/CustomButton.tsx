import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  onPress: () => void;
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3b71f3',
  },

  container_SECONDARY: {
    borderColor: '#3b71f3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
  },

  text_PRIMARY: {
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3b71f3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});
