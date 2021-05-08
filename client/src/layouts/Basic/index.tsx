import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./index.css";
import routes from "src/common/routes";
import Sidebar from "src/layouts/Sidebar";

function Basic() {
  const history = useHistory();
  const [pathname, setPathname] = useState<string>(history.location.pathname);
  useEffect(() => {
    const unHistory = history.listen((h: any) => {
      const p = h.location ? h.location.pathname : h.pathname;
      if (p === "/") {
        history.replace(routes[0].path);
      } else {
        setPathname(p);
      }
    });

    if (history.location.pathname === "/") history.replace(routes[0].path);

    return () => unHistory();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="layout">
      <Sidebar
        className="layout-sidebar drag"
        routes={routes}
        pathname={pathname}
      />
      <div className="layout-main">
        <Switch>
          {routes.map((item) => {
            const { path, path: key, component: Component } = item;
            const props = {
              key,
              path,
            };
            return (
              <Route exact {...props}>
                <Component path={path} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Basic;
