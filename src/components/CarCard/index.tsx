import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ArrowRight from '@assets/arrow-right.svg';
import {useNavigation} from '@react-navigation/native';
import {CarData} from '@global/reducers/cars';

interface CardProps {
  background: string;
  carDetail: CarData;
  testID: string;
}
export const Card = ({background, carDetail, testID}: CardProps) => {
  const navigation = useNavigation();
  const PRODUCT = 'PRODUCT';
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PRODUCT as never, {carDetail} as never)
      }
      style={{backgroundColor: background}}
      className={' rounded-2xl relative mt-3'}>
      <View data-testID={testID} className="items-center flex  pb-10">
        <Image
          className=" w-full h-[170px]"
          resizeMode={'contain'}
          source={{uri: carDetail.imageLink}}
        />
      </View>
      <View className="absolute bottom-[17px] right-[20px] bg-black rounded-[36px] pl-5 pr-4 py-[7px] flex-row items-center">
        <View className="pr-4">
          <Text className="font-[Nunito-ExtraBold] text-white">
            Tesla {carDetail.model}
          </Text>
          <View className="flex flex-row items-end ">
            <Text className="font-[Nunito-Regular] text-white text-[10px]">
              AED
            </Text>
            <Text className="font-[Nunito-ExtraBold] text-white text-[16px] px-1">
              {carDetail.basePrice}
            </Text>
            <Text className="font-[Nunito-Regular] text-white text-[10px]">
              onwards
            </Text>
          </View>
        </View>
        <ArrowRight />
      </View>
    </TouchableOpacity>
  );
};
