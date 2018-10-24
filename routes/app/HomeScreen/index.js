import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import SecondPage from './../SecondPage/index';
import ThirdPage from './../ThirdPage/index';
import FourthPage from './../FourthPage/index';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    second: { screen: SecondPage },
    third: { screen: ThirdPage },
    fourth: { screen: FourthPage },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
