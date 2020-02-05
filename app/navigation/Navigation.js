import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestauransScreenStacks from "./RestauransStacks";

const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestauransScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: "Restaurantes",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />
      )
    })
  }
});

export default createAppContainer(NavigationStacks);
