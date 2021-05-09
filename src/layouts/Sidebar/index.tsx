import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import { RouteItem } from "src/common/routes";
import Image from "src/components/Image";
import avatar from "src/assets/avatar/sky.png";

const Sidebar: React.FC<{
  routes: RouteItem[];
  pathname: string;
  className?: string;
}> = ({ routes, className, pathname }) => {
  const history = useHistory();
  return (
    <div className={className}>
      <Image src={avatar} size={48} style={{ margin: "50px 0px 30px 0px" }} />
      {routes.map((item) => {
        const { path, icon } = item;
        let clx = "sidebar-item no-drag";
        if (pathname.indexOf(path) >= 0) clx += " sidebar-item-active";
        return (
          <div key={path} className={clx} onClick={() => history.replace(path)}>
            <Image src={icon} size={22} />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
