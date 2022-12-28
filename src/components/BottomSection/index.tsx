import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@components/Button';

export function BottomSection(props: {basePrice: string; navigateTo: string}) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="  text-2xl text-black font-[Nunito-Regular] flex-1">
        AED {props.basePrice}
      </Text>
      <Button navigateTo={props.navigateTo}>Next</Button>
    </View>
  );
}
