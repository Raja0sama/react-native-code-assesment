import {StatusBar, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Logo from '@assets/logo.svg';
import Back from '@assets/back-button.svg';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const Header = ({navigation}: NativeStackHeaderProps) => {
  const goBack = () => navigation.goBack();
  const canGoBack = navigation.canGoBack();
  return (
    <View className={'px-8 pt-1 bg-white'}>
      <StatusBar backgroundColor="#FFFFFF" barStyle={'dark-content'} />
      <View className="justify-between items-center flex-row">
        <View>
          {canGoBack && (
            <TouchableOpacity onPress={goBack}>
              <Back width={16} height={16} />
            </TouchableOpacity>
          )}
        </View>
        <Logo width={150} className={'pr-2'} />
        <View />
      </View>
    </View>
  );
};

export default Header;
