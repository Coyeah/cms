import React, { useEffect, useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import { RouteItem } from "src/common/routes";
import Image from "src/components/Image";
import avatar from "src/assets/avatar/sky.png";

const Sidebar: React.FC<{
  routes: RouteItem[];
  className?: string;
}> = (props) => {
  const { routes, className } = props;
  const history = useHistory();
  const [pathname, setPathname] = useState<string>(history.location.pathname);

  useEffect(() => {
    const unHistory = history.listen((h: any) => {
      let pathname = h.location ? h.location.pathname : h.pathname;
      setPathname(pathname);
    });
    return () => unHistory();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className={className}>
      <Image src={avatar} size={48} style={{ margin: "50px 0px 30px 0px" }} />
      {routes.map((item) => {
        const { path, icon } = item;
        let clx = "sidebar-item no-drag";
        if (pathname === path) clx += " sidebar-item-active";
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
