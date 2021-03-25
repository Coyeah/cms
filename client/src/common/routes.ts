import { ComponentType } from "react";
import calendar from "src/assets/icon/calendar_w.png";
import pen from "src/assets/icon/pen_w.png";
import clip from "src/assets/icon/clip_w.png";
import settings from "src/assets/icon/settings_w.png";

import Home from "src/pages/home";

const routes: RouteItem[] = [
  {
    path: "/",
    name: "首页",
    icon: calendar,
    component: Home,
  },
  {
    path: "/blog",
    name: "文章",
    icon: pen,
    component: Home,
  },
  {
    path: "/okr",
    name: "OKR",
    icon: clip,
    component: Home,
  },
  {
    path: "/settings",
    name: "设置",
    icon: settings,
    component: Home,
  },
];

export default routes;

export interface RouteItem {
  path: string;
  name?: string;
  icon: string;
  component: ComponentType<any>;
}
