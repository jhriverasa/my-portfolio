import { useState } from "react";

import { Box, Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface CustomTabsProps {
  tabList: Array<{
    label: string;
    component: React.ReactNode;
  }>;
}

const CustomTabs = (props: CustomTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0); //assume that array is not empty and select the first tab
  const { tabList } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Box sx={{ borderBottom: 4, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "#0E7C7B" },
          }}
        >
          {tabList.map((tab, i) => {
            return (
              <Tab
                className="font-body text-slate-500 lg:text-base md:text-md sm:text-sm"
                label={tab.label}
                key={`tab-${i}`}
                {...a11yProps(i)}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabList.map((tab, i) => {
        return (
          <TabPanel key={`tab-panel-${i}`} value={selectedTab} index={i}>
            {tab.component}
          </TabPanel>
        );
      })}
    </div>
  );
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>
            <div>{children}</div>
          </div>
        </Box>
      )}
    </div>
  );
}

export default CustomTabs;
