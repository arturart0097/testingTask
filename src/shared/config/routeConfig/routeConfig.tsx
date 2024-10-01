import { RouteProps } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import React from "react";
import { InfoPage } from "../../../pages/InfoPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  INFO = "info",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.INFO]: "/info/:id",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.INFO]: {
    path: RoutePath.info,
    element: <InfoPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
