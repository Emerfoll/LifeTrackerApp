import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import singleLifeTotal from "../app/Screens/singleLifeTotal";
import homePage from "../app/Screens/homePage";
import twoPlayer from "../app/Screens/twoPlayer"

// Used for "Stack Navigation"
const screens = {
    Home : {
        screen : homePage,
    },
    Single: {
        screen : singleLifeTotal,
    },
    Two: {
        screen : twoPlayer,
    }
};

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);