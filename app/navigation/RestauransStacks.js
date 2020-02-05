import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../screens/Restaurants";

const RestauransScreenStacks = createStackNavigator({
  Restaurants: {
    Screen: RestaurantsScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  }
});

export default RestauransScreenStacks;
