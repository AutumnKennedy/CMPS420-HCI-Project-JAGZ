import { routes } from "@/constants/routes";
import {
  DataUsage,
  ImportContactsRounded,
  Panorama,
  SsidChart,
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const tabs = [
  { title: "Import", icon: <ImportContactsRounded />, route: routes.import },
  { title: "Plot Data", icon: <SsidChart />, route: routes.plotData },
  {
    title: "Preprocess Data",
    icon: <DataUsage />,
    route: routes.preprocessData,
  },
  { title: "Visualize Data", icon: <Panorama />, route: routes.visualizeData },
];

export function DrawerNavigation(): React.ReactElement {
  const navigate = useNavigate();

  const navigateToPage = (route: string) => {
    navigate(route);
    console.log("navigate to", route);
  };

  return (
    <Drawer anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {tabs.map((tab, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigateToPage(tab.route)}>
              <ListItemIcon>{tab.icon}</ListItemIcon>
              <ListItemText primary={tab.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
