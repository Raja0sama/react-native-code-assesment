import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {CarData} from '@global/reducers/cars';
import {OptionSelector} from '@components/OptionSelector';
import {BottomSection} from '@components/BottomSection';

interface CarProps {
  route: {
    params: {carDetail: CarData};
  };
}

export interface carDetailProps {
  options: {
    name: string;
    price: string;
  }[];
}

export default function AutoPilot(props: CarProps) {
  const {carDetail} = props.route.params;
  return (
    <View className="flex flex-1 bg-[#f2f5f8]">
      <ImageBackground
        className="px-9 py-9 flex-1 "
        source={require('../../../assets/auto-pilot.png')}
      />
      <View className="">
        <View className=" bg-white py-10 px-9 rounded-t-[36px]">
          <Text className="pb-5 text-[#A4B0BC] text-xl font-[Nunito-Regular]">
            Autopilot
          </Text>
          <OptionSelector options={carDetail.autopilotOptions} />
          <View className="py-5">
            <Text className=" font-[Nunito-Regular] text-base text-[#979797]">
              Atomatic driving from highway on-ramp to off-ramp including
              interchanges and overtaking slower cars.
            </Text>
          </View>
          <BottomSection
            navigateTo="CHECKOUT"
            basePrice={carDetail.basePrice}
          />
        </View>
      </View>
    </View>
  );
}
