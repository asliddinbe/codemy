import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import BuildIcon from "@mui/icons-material/Build";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { useNavigate } from "react-router-dom";
const listitembutton = { width: "100%", color: "white", mt: "3%", mb: "3%" };
const icon = { fontSize: 18 };
const link = { fontSize: 14, mt: "1.5%", ml: "3%" };
const name = {
  width: "85%",
  color: "#95ABEC",
  fontSize: 10,
  fontWeight: "900",
  pt: "5%",
  pb: "2%",
};
const name2 = {
  width: "85%",
  color: "#95ABEC",
  fontSize: 10,
  fontWeight: "900",
  pt: "5%",
  pb: "2%",
  ml: "8%",
};
export default () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ListItemButton sx={listitembutton} onClick={() => navigate("/")}>
          <SpeedIcon sx={icon} />
          <Typography sx={link}>Dashboard</Typography>
        </ListItemButton>
        <Divider sx={{ width: "87%", color: "white" }} />
        <Typography sx={name}>INTERFACE</Typography>
        <ListItemButton onClick={handleClick} sx={listitembutton}>
          <SettingsIcon sx={icon} />
          <Typography sx={link}>Components</Typography>
          <ListItemText />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            bgcolor: "white",
            mt: "3%",
            mb: "3%",
            width: "80%",
            borderRadius: "5px",
          }}
        >
          <List component="div" disablePadding>
            <Typography sx={name2}>CUSTOM COMPONENTS:</Typography>
            <ListItemButton onClick={() => navigate("/buttons")}>
              <Typography sx={{ fontSize: "14px" }}>Buttons</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/cards")}>
              <Typography sx={{ fontSize: "14px" }}>Cards</Typography>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick1} sx={listitembutton}>
          <BuildIcon sx={icon} />
          <Typography sx={link}>Utilities</Typography>
          <ListItemText />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open1}
          timeout="auto"
          unmountOnExit
          sx={{
            bgcolor: "white",
            mt: "3%",
            mb: "3%",
            width: "80%",
            borderRadius: "5px",
          }}
        >
          <List component="div" disablePadding>
            <Typography sx={name2}>CUSTOM UTILITIES:</Typography>
            <ListItemButton onClick={() => navigate("/color")}>
              <Typography sx={{ fontSize: "14px" }}>Colors</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/border")}>
              <Typography sx={{ fontSize: "14px" }}>Borders</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/animation")}>
              <Typography sx={{ fontSize: "14px" }}>Animation</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/other")}>
              <Typography sx={{ fontSize: "14px" }}>Other</Typography>
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ width: "87%", color: "white" }} />
        <Typography sx={name}>ADDONS</Typography>
        <ListItemButton onClick={handleClick2} sx={listitembutton}>
          <FolderIcon sx={icon} />
          <Typography sx={link}>Pages</Typography>
          <ListItemText />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open2}
          timeout="auto"
          unmountOnExit
          sx={{
            bgcolor: "white",
            mt: "3%",
            mb: "3%",
            width: "80%",
            borderRadius: "5px",
          }}
        >
          <List component="div" disablePadding>
            <Typography sx={name2}>LOGIN SCREENS:</Typography>
            <ListItemButton onClick={() => navigate("/login")}>
              <Typography sx={{ fontSize: "14px" }}>Login</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/register")}>
              <Typography sx={{ fontSize: "14px" }}>Register</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/forget")}>
              <Typography sx={{ fontSize: "14px" }}>Forgot Password</Typography>
            </ListItemButton>
            <Typography sx={name2}>OTHER PAGES:</Typography>
            <ListItemButton>
              <Typography
                sx={{ fontSize: "14px" }}
                onClick={() => navigate("/page404")}
              >
                404 Page
              </Typography>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/blank")}>
              <Typography sx={{ fontSize: "14px" }}>Blank Page</Typography>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton sx={listitembutton} onClick={() => navigate("/charts")}>
          <StackedLineChartIcon sx={icon} />
          <Typography sx={link}>Charts</Typography>
        </ListItemButton>
        <ListItemButton sx={listitembutton} onClick={() => navigate("/tables")}>
          <Typography sx={link}>Tables</Typography>
        </ListItemButton>
      </Box>
    </>
  );
};
