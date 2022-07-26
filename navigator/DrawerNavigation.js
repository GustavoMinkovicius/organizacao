import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import DashboardScreen from "../screens/DashboardScreen";
import Logout from "../screens/Logout"
import TabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            drawerContentOptions={{
                activateTintColor: '#e91e63',
                inactiveTintColor: '#545454',
                itemStyle:{marginVertical: 5}
            }}
            <Drawer.Screen name="Tela Inicial" component={TabNavigator}/>
            <Drawer.Screen name="Tela Inicial" component={DashboardScreen}/>
            <Drawer.Screen name="Logout" component={Logout}/>
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;