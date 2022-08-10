import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import TaskScreen from './screens/TaskScreen';
import CreateTaskScreen from './screens/CreateTaksScreen';
import EditeTask from './screens/EditeTaskScreen';
import Signup from './screens/signup'
import Logout from './screens/Logout'
import db from './config';


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen, 
  TaskScreen: TaskScreen,
  CreateTaskScreen: CreateTaskScreen,
  EditeTask:EditeTask,
  Signup:Signup,
  Logout:Logout
},{initialRouteName:LoginScreen.name})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator/>
    
  )
}