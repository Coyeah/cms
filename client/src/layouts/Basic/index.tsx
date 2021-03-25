import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import routes from "src/common/routes";
import Sidebar from "src/layouts/Sidebar";
import Breadcrumb from "src/layouts/Breadcrumb";

function Basic() {
  return (
    <Router>
      <div className="layout">
        <Sidebar className="layout-sidebar drag" routes={routes} />
        <div className="layout-main">
          <Breadcrumb />
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
    </Router>
  );
}

export default Basic;
