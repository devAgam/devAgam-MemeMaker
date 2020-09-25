import React from "react";
import { Tab } from "semantic-ui-react";
import Templates from "./Templates";
import { TemplatesInit } from "./TemplatesInit.jsx";
import MyProfile from "./MyProfile";
const panes = [
  { menuItem: "Templates", render: () => <TemplatesInit /> },
  { menuItem: "My Profile", render: () => <MyProfile /> },
];

const TabExampleVerticalTabular = () => (
  <Tab
    menu={{ color: "blue", fluid: true, vertical: true, tabular: true }}
    panes={panes}
  />
);

export default TabExampleVerticalTabular;
