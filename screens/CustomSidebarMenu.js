import React, { Component } from "react";
import { View} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

export default class CustomSidebarMenu extends Component {
  
  render() {
    let props = this.props;
    return (
      <View
        style={{flex: 1}}
      >
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}
