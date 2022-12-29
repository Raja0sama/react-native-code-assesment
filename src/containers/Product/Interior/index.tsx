import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Black from '@assets/black.svg';

import White from '@assets/white.svg';
import {CarData} from '@global/reducers/cars';
import {OptionSelector} from '@components/OptionSelector';
import {BottomSection} from '@components/BottomSection';

const colors = [Black, White];
interface CarProps {
  route: {
    params: {carDetail: CarData};
  };
}

export default function Interior(props: CarProps) {
  const {carDetail} = props.route.params;
  return (
    <View className="flex flex-1 bg-[#f2f5f8]">
      <ImageBackground
        className="px-9 py-9 flex-1 "
        source={require('../../../assets/interior-image.png')}
      />
      <View className="">
        <View className=" bg-white py-10 px-9 rounded-t-[36px]">
          <Text className="pb-5 text-[#A4B0BC] text-xl font-[Nunito-Regular]">
            Select Interior
          </Text>
          <OptionSelector options={carDetail.interiorOptions} />

          <View className="flex-row  items-center pt-5 pb-5">
            {colors.map(Component => (
              <View className="pr-5">
                <Component />
              </View>
            ))}
          </View>
          <BottomSection
            navigateTo="AUTOPILOT"
            basePrice={carDetail.basePrice}
          />
        </View>
      </View>
    </View>
  );
}
