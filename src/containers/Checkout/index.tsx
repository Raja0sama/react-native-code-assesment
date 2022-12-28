import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Button} from '@components/Button';
import Apple from '@assets/apple.svg';
import Logo from '@assets/white-logo.svg';
export default function Checkout() {
  return (
    <View className="flex flex-1 bg-[#f2f5f8] relative">
      <View className="absolute top-0 right-0 left-0  z-10 flex items-center">
        <Logo />
      </View>
      <ImageBackground
        className="px-9 py-9 h-[90%]"
        source={require('@assets/checkout-image.png')}
      />
      <View className="absolute bottom-0 left-0 right-0">
        <View className=" bg-black pt-10 px-9 rounded-t-[36px]">
          <Text className="pb-9 text-[#A4B0BC] text-xl font-[Nunito-Regular] text-center">
            Summary
          </Text>

          <Text className=" text-white text-5xl font-[Nunito-Regular] text-center">
            Your Model Y
          </Text>
          <Text className="pb-10 text-white text-4xl font-[Nunito-Regular] text-center">
            AED 267,500
          </Text>

          <View className="flex-row items-center justify-center py-3 px-10">
            <Button navigateTo={'CHECKOUT'}>
              <View className="flex-row justify-center items-center">
                <Apple width="30" height={30} />
                <Text className="text-white text-2xl font-[Nunito-Bold]">
                  Pay
                </Text>
              </View>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
