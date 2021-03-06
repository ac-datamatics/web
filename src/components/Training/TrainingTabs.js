import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import classes from "./Training.module.css";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 100,
    width: "100%",
    backgroundColor: "#f8991d",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontFamily: "Roboto",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(30),
    marginRight: theme.spacing(1),
    color: "#ffffff",
    "&.Mui-selected": {
      color: "#ffffff",
      fontFamily: "Arial",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function CustomizedTabs({ labels, children }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          {labels.map((label, key) => {
            return (
              <StyledTab label={label} key={key} className={classes.tab} />
            );
          })}
        </StyledTabs>
      </Box>
      {React.Children.map(children, (child, key) => {
        return (
          <div
            className={classes.parentContentWrap}
            hidden={value !== key}
            id={key}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
