import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import TabPanel from "./tab-panel";
import PlusTwo from "./plus-two";
import Graduates from "./graduates";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CoursesTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="mt-5 md:px-[3em]">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="secondary"
          // textColor="inherit"
          variant="fullWidth"
        >
          <Tab
            className="capitalize text-[1rem] font-semibold text-[#595959] hover:text-[#266c9b] font-sans"
            label="School"
            disableRipple
            {...a11yProps(0)}
          />
          <Tab
            className="capitalize text-[1rem] font-semibold text-[#595959] hover:text-[#266c9b] font-sans"
            label="+2 program"
            disableRipple
            {...a11yProps(1)}
          />
          <Tab
            className="capitalize text-[1rem] font-semibold text-[#595959] hover:text-[#266c9b] font-sans"
            label="Graduates"
            disableRipple
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlusTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Graduates />
      </TabPanel>
    </Box>
  );
}
