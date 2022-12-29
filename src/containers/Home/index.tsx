import React, {useMemo} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderAvatar from '@components/Header/HeaderAvatar';
import {Card} from '@components/CarCard';
import {useDispatch, useSelector} from 'react-redux';
import {CarState, fetchCars} from '@global/reducers/cars';

const Home = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(
    (state: {car: CarState}) => state.car,
  );
  useMemo(() => fetchCars()(dispatch), [dispatch]);

  return (
    <View className="bg-[#f1f4f8] flex-1">
      <HeaderAvatar />
      <ScrollView className="p-4 pb-4">
        <Text className="text-[#A4B0BC] text-xl font-[Nunito-Regular]">
          Explore Tesla Car
        </Text>
        <MainContent data={data} loading={loading} error={error} />
      </ScrollView>
    </View>
  );
};
interface MainContentProps extends CarState {}
const colors = ['#D4D4D4', 'gray', '#23398A', '#AF4A4A'];
const MainContent = (props: MainContentProps) => {
  return (
    <View>
      {props.loading && (
        <View className="p-5">
          <Text>Loading Content ....</Text>
        </View>
      )}
      {props.error && (
        <View className="p-5">
          <Text>error : {props.error}</Text>
        </View>
      )}
      {props.data.map((car, index) => (
        <Card
          testID="main-content"
          key={car.model}
          carDetail={car}
          background={colors[index]}
        />
      ))}

      <View className="h-8" />
    </View>
  );
};

export default Home;
