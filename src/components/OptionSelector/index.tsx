import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {carDetailProps} from '@containers/Product/AutoPilot';

const Option = ({
  selected,
  title,
  price,
  onPress,
}: {
  selected?: boolean;
  title: string;
  price: string;
  onPress: () => void;
}) => {
  const headingProps = {
    style: {color: selected ? '#000' : '#929395'},
  };
  const subHeadingProps = {
    style: {color: selected ? '#D01000' : '#dee3e8'},
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{flex: selected ? 1 : 0}}>
        <Text className="font-[Nunito-Regular text-2xl" {...headingProps}>
          {title}
        </Text>
        <Text className=" font-[Nunito-Regular] text-xl" {...subHeadingProps}>
          AED {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export function OptionSelector({options}: carDetailProps) {
  const [selected, setSelected] = useState(options[0].name);

  return (
    <View className="flex-row  justify-between ">
      {options.map(option => (
        <Option
          onPress={() => setSelected(option.name)}
          selected={option.name === selected}
          key={option.name}
          title={option.name}
          price={option.price}
        />
      ))}
    </View>
  );
}
