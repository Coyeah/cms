import { ComponentType } from "react";
import calendar from "src/assets/icon/calendar.png";
import settings from "src/assets/icon/settings.png";

import Home from "src/pages/home";
import Settings from "src/pages/settings";

const routes: RouteItem[] = [
  {
    path: "/home",
    icon: calendar,
    component: Home,
  },
  {
    path: "/settings",
    icon: settings,
    component: Settings,
  },
];

export default routes;

export interface RouteItem {
  path: string;
  name?: string;
  icon: string;
  routes?: RouteItem;
  component: ComponentType<any>;
}
