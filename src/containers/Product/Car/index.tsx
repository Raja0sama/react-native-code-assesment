import {View, Text, Image} from 'react-native';
import React from 'react';
import {CarData} from '@global/reducers/cars';
import {OptionSelector} from '@components/OptionSelector';
import {BottomSection} from '@components/BottomSection';

interface CarProps {
  route: {
    params: {carDetail: CarData};
  };
}

export default function Car(props: CarProps) {
  const {carDetail} = props.route.params;
  return (
    <View className="flex flex-1 bg-[#f2f5f8]">
      <View className="px-9 py-9 flex-1 flex-col justify-between">
        <Text className="pb-10  text-[#A4B0BC] text-xl font-[Nunito-Regular]">
          Select Your Car
        </Text>
        <View className="items-center flex-1 ">
          <Image
            resizeMode="contain"
            className=" w-screen h-full"
            source={{uri: carDetail.imageLink}}
          />
        </View>
        <OptionSelector options={carDetail.features} />
      </View>
      <View className="flex-1">
        <View className=" bg-white py-10 px-9 rounded-t-[36px]">
          <View className="flex-row  justify-between pb-6 ">
            <View className="flex-1 items-center">
              <Text className=" font-[Nunito-SemiBold] text-black text-3xl">
                3.5s
              </Text>
              <Text className=" font-[Nunito-Regular] text-black text-xs">
                0-60 mph
              </Text>
            </View>
            <View className="w-[1px] h-3/4 bg-black" />
            <View className="flex-1 items-center">
              <Text className=" font-[Nunito-SemiBold] text-black text-3xl">
                150mph
              </Text>
              <Text className=" font-[Nunito-Regular] text-black text-xs">
                Top Speed
              </Text>
            </View>
          </View>
          <View>
            <Text className=" font-[Nunito-Regular] text-base text-[#979797]">
              Tesla All-Wheel Drive has two independent motors. Unlike
              traditional all-wheel drive systems, these two motors digitally
              control torque to the front and rear wheels—for far better
              handling and traction control.
            </Text>
          </View>
          <BottomSection
            navigateTo="EXTERIOR"
            basePrice={carDetail.basePrice}
          />
        </View>
      </View>
    </View>
  );
}
