import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderAvatar = () => {
  return (
    <View className="pt-2 pb-5 flex flex-row items-center bg-white px-8">
      <Image style={styles.image} source={require('../../assets/avatar.png')} />
      <Text className={'font-[Nunito-ExtraBold] text-2xl pl-3  text-[#2E2828]'}>
        Hello, Sharaf
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: 70, height: 70},
});

export default HeaderAvatar;
