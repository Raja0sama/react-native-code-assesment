import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface ButtonProps {
  children: React.ReactNode;
  navigateTo: string;
}

export const Button = ({children, navigateTo}: ButtonProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(navigateTo);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      className=" border-[#D01000] border-[2px]  flex justify-center items-center flex-1 py-3 rounded-full">
      {children && typeof children === 'string' ? (
        <Text className=" font-[Nunito-Regular] text-xl text-black">
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
