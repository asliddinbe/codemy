import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import pro from "../../../assets/img/undraw_profile.svg";
import { Divider, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../Search";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: { md: "none", sm: "none", xs: "flex" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <IconButton
          onClick={handleClick4}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open4 ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open4 ? "true" : undefined}
        >
          <SearchIcon sx={{ fontSize: 20, color: "silver" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl4}
          id="account-menu"
          open={open4}
          onClose={handleClose4}
          onClick={handleClose4}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          sx={{
            width: "600px",
          }}
        >
          <Search />
        </Menu>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <NotificationsIcon sx={{ fontSize: 20, color: "silver" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box
            sx={{
              bgcolor: "#4E73DF",
              height: "40px",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "7px",
              display: "flex",
              alignItems: "center",
              color: "white",
              pl: "10%",
              fontSize: 12,
              fontWeight: "700",
            }}
          >
            Messages Center
          </Box>
          {[1, 1, 1, 1].map((item) => (
            <MenuItem>
              <Avatar src={pro} />{" "}
              <Typography sx={{ ml: "5%" }}>
                <Typography sx={{ fontSize: 10, color: "silver" }}>
                  December 12 , 2019
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  Hi there! I am wondering if you..
                </Typography>
              </Typography>
              <Divider />
            </MenuItem>
          ))}
          <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontSize: 10, color: "silver" }}>
              Read More Messages
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick1}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open1 ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? "true" : undefined}
        >
          <EmailIcon sx={{ fontSize: 20, color: "silver" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl1}
          id="account-menu"
          open={open1}
          onClose={handleClose1}
          onClick={handleClose1}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box
            sx={{
              bgcolor: "#4E73DF",
              height: "40px",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "7px",
              display: "flex",
              alignItems: "center",
              color: "white",
              pl: "10%",
              fontSize: 12,
              fontWeight: "700",
            }}
          >
            Messages Center
          </Box>
          {[1, 1, 1, 1].map((item) => (
            <MenuItem>
              <Avatar src={pro} />{" "}
              <Typography sx={{ ml: "5%" }}>
                <Typography sx={{ fontSize: 12, fontWeight: "890" }}>
                  Hi there! I am wondering if you..
                </Typography>
                <Typography sx={{ fontSize: 10, color: "silver" }}>
                  Emliy Fowler 58m
                </Typography>
              </Typography>
              <Divider />
            </MenuItem>
          ))}
          <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontSize: 10, color: "silver" }}>
              Read More Messages
            </Typography>
          </MenuItem>
        </Menu>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: 12,
            display: { md: "flex", sm: "none", xs: "none" },
            color: "silver",
          }}
        >
          Douglas McGee
        </Typography>
        <IconButton
          onClick={handleClick2}
          sx={{}}
          aria-controls={open2 ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={pro}></Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl2}
          id="account-menu"
          open={open2}
          onClose={handleClose2}
          onClick={handleClose2}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <PersonIcon sx={{ color: "silver", fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Profile</Typography>
          </MenuItem>
          <MenuItem>
            <SettingsIcon sx={{ color: "silver", fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Settings</Typography>
          </MenuItem>
          <MenuItem>
            <FormatListBulletedIcon sx={{ color: "silver", fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Active Log</Typography>
          </MenuItem>
          <MenuItem>
            <LogoutIcon sx={{ color: "silver", fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Log OUt</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
}
