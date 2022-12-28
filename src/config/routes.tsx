import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Home from '@containers/Home';
import Header from '@components/Header';
import {CustomTabBar} from '@components/CustomTabBar';
import Car from '@containers/Product/Car';
import Interior from '@containers/Product/Interior';
import Exterior from '@containers/Product/Exterior';
import Autopilot from '@containers/Product/AutoPilot';
import Checkout from '@containers/Checkout';
import {View} from 'react-native';
import {CarData} from '@global/reducers/cars';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const tabRoutes = {
  CAR: {
    component: Car,
  },
  EXTERIOR: {
    component: Exterior,
  },
  INTERIOR: {
    component: Interior,
  },
  AUTOPILOT: {
    component: Autopilot,
  },
};

const ProductRoutes = ({
  route: routeParams,
}: {
  route: {params: {carDetail: CarData}};
}): JSX.Element => (
  <Tab.Navigator
    screenOptions={{}}
    tabBar={props => <CustomTabBar {...props} />}>
    {Object.entries(tabRoutes).map(route => {
      const [name, options] = route;
      const {component} = options;
      return (
        <Tab.Screen
          initialParams={routeParams.params}
          key={name}
          name={name}
          // @ts-ignore
          component={component}
        />
      );
    })}
  </Tab.Navigator>
);

interface StackRoutes {
  [key: string]: {
    component: React.ComponentType;
    header?: () => JSX.Element;
  };
}
const stackRoutes: StackRoutes = {
  HOME: {component: Home},
  // @ts-ignore
  PRODUCT: {component: ProductRoutes},
  CHECKOUT: {component: Checkout, header: () => <View />},
};

export const InitialRoutes = (): JSX.Element => (
  <Stack.Navigator>
    {Object.entries(stackRoutes).map(route => {
      const [name, routeInfo] = route;
      return (
        <Stack.Screen
          options={{
            header: routeInfo?.header
              ? routeInfo.header
              : (Header as
                  | ((props: NativeStackHeaderProps) => React.ReactNode)
                  | undefined),
          }}
          key={name}
          name={name}
          component={routeInfo.component}
        />
      );
    })}
  </Stack.Navigator>
);
