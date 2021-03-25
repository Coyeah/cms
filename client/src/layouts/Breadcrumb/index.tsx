import React from "react";
import "./index.css";
import { Breadcrumb } from "semantic-ui-react";

const App = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section link>Store</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
    </Breadcrumb>
  );
};

export default App;
