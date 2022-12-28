import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';
import Black from '@assets/black.svg';
import Blue from '@assets/blue.svg';
import Gray from '@assets/gray.svg';
import Red from '@assets/red.svg';
import White from '@assets/white.svg';
import {CarData} from '@global/reducers/cars';
import {BottomSection} from '@components/BottomSection';

const newColorsObject = [
  {
    IconComponent: White,
    label: 'Pearl White',
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0121-459f1b30d202212210637',
  },
  {
    IconComponent: Gray,
    label: 'Midnight Silver',
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0121-459f1b30d202212210637',
  },
  {
    IconComponent: Blue,
    label: 'Deep Blue',
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSB,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0121-459f1b30d202212210637',
  },
  {
    IconComponent: Red,
    label: 'red',
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0121-459f1b30d202212210637',
  },
  {
    IconComponent: Black,
    label: 'Red Multi-Coat',
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0121-459f1b30d202212210637',
  },
];

interface CarProps {
  route: {
    params: {carDetail: CarData};
  };
}

export default function Exterior(props: CarProps) {
  const {carDetail} = props.route.params;

  const [selectedCar, setCar] = useState<typeof newColorsObject[0]>(
    newColorsObject[0],
  );

  const getPrice = useMemo(() => {
    const basePrice = parseInt(carDetail.basePrice.split(',').join(''), 10);
    const item = carDetail.exteriorColors.find(
      e => e.name === selectedCar.label,
    );
    if (!item) {
      return basePrice;
    }

    if (item.price === 'Included') {
      return basePrice;
    }

    const price = parseInt((item.price as string).split(',').join(''), 10);
    return price + basePrice;
  }, [carDetail.basePrice, carDetail.exteriorColors, selectedCar.label]);

  const selectedColor = {
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 100,
  };

  return (
    <View className="flex flex-1 bg-[#f2f5f8]">
      <View className="px-9 py-9 flex-1 flex-col justify-between">
        <Text className="pb-10  text-[#A4B0BC] text-xl font-[Nunito-Regular]">
          Select Color
        </Text>
        <View className="items-center flex-1 ">
          <Image
            resizeMode="contain"
            className="w-screen h-full"
            source={{uri: selectedCar.image}}
          />
        </View>
        <View className="flex-1 mt-5">
          <Text className=" font-[Nunito-Regular] text-black text-2xl">
            Pearl White Multi-Coat
          </Text>
          <Text className=" font-[Nunito-Regular] text-[#D01000] text-xl">
            Included
          </Text>
          <View className="flex-row justify-between items-center pt-5">
            {newColorsObject.map(color => {
              const {IconComponent, label} = color;
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => setCar(color)}
                  style={selectedCar.label === label && selectedColor}>
                  <IconComponent />
                </TouchableOpacity>
              );
            })}
          </View>
          <View className="h-[1px] w-full bg-[#CFD3D9] mt-4" />
        </View>
        <View className="flex-1 justify-center">
          <Text className=" font-[Nunito-Regular] text-black pb-5">
            20’’ Performance Wheels
          </Text>
          <Text className=" font-[Nunito-Regular] text-black ">
            Carbon fiber spoiler
          </Text>
        </View>
      </View>
      <View className="">
        <View className=" bg-white py-10 px-9 rounded-t-[36px]">
          <BottomSection navigateTo="INTERIOR" basePrice={getPrice + ''} />
        </View>
      </View>
    </View>
  );
}
