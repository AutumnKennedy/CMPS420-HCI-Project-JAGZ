import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import "./homePage.css";
import { ImportData } from "./ImportData/ImportData";
import { VisualizeData } from "./VisualizeData";

type Tab = {
  name: string;
  element: JSX.Element;
};

const tempTabs: Tab[] = [
  { name: "Bob", element: <VisualizeData /> },
  { name: "Sue", element: <VisualizeData /> },
  { name: "Joe", element: <div /> },
];

export function HomePage(): React.ReactElement {
  // get tabs from backend based off the subjects, this will
  // need to replace the value so that they appear as the tabs

  const [value, setValue] = useState(tempTabs[0]);

  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: Tab
  ) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="tabs">
        <Tabs value={value} onChange={handleChange} orientation="vertical">
          {tempTabs.map((tab, index) => (
            <Tab key={index} value={tab} label={tab.name} />
          ))}
        </Tabs>
      </div>

      <div>{value.element}</div>
    </div>
  );
}
