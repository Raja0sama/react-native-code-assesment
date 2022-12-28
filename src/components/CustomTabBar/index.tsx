import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import React from 'react';

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) => {
  return (
    <View className="flex flex-row justify-between px-8 bg-white pt-5">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            className="pb-2"
            key={route.key}
            style={[
              styles.touchableOpacity,
              {borderBottomColor: isFocused ? '#D01000' : 'transparent'},
            ]}>
            <Text
              className="text-base"
              style={[styles.text, {color: isFocused ? '#000000' : '#cccccc'}]}>
              {index + 1 + '. ' + label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },
  text: {
    color: '#cccccc',
    fontFamily: 'Nunito-SemiBold',
    textTransform: 'capitalize',
  },
});
