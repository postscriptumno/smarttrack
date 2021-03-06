import {NavigationContainerRef} from "@react-navigation/native";
import * as React from "react";

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params: object) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const getCurrentRoute = () =>
  navigationRef.current?.getCurrentRoute() || {name: "name"};
