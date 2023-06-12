import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
const Stack = createStackNavigator();
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

export const SettingsNavigator = ({ route, navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
    <Stack.Screen
      options={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
      name="RestaurantDetailFavourites"
      component={RestaurantDetailScreen}
    />
    <Stack.Screen name="CameraScreen" component={CameraScreen} />
  </Stack.Navigator>
);
