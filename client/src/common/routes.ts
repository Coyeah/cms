import { ComponentType } from "react";
import calendar from "src/assets/icon/calendar_w.png";
import pen from "src/assets/icon/pen_w.png";
import clip from "src/assets/icon/clip_w.png";
import settings from "src/assets/icon/settings_w.png";

import Home from "src/pages/home";
import Settings from "src/pages/settings";

const routes: RouteItem[] = [
  {
    path: "/home",
    icon: calendar,
    component: Home,
  },
  {
    path: "/blog",
    icon: pen,
    component: Home,
  },
  {
    path: "/okr",
    icon: clip,
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
