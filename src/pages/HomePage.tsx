import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import "./homePage.css";
import { VisualizeData } from "./VisualizeData";

type Tab = {
  name: string;
  element: JSX.Element;
};

const tempTabs: Tab[] = [
  { name: "Subject 1", element: <VisualizeData /> },
  { name: "Subject 2", element: <VisualizeData /> },
  { name: "Subject 3", element: <div /> },
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
      <div>
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
