import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
  Container,
  Menu,
} from "@mui/material";
import React from "react";
import "./index.css";

export default () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="card" sx={{ bgcolor: "#F8F9FC" }}>
      <br />
      <Typography variant="h5" sx={{ ml: 3 }}>
        Other Utilities
      </Typography>
      <Typography sx={{ fontSize: 15, color: "#8C879C", mb: 3, ml: 3 }}>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this
        <br /> theme past the default utility classes built into Bootstrap's
        framework.
      </Typography>
      <Grid container columns={12} spacing={3}>
        <Grid item xs={12} lg={6} md={6}>
          <Container maxWidth="sm">
            <Card sx={{ boxShadow: 4, minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                  Overflow Hidden Utilty
                </Typography>
                <hr />
                <Typography sx={{ mb: 1.5 }}>
                  {" "}
                  Use <span style={{ color: "red" }}>.o-hidden</span> to set the
                  overflow property of any element to hidden.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>

        <Grid item xs={12} lg={6} md={6}>
          <Container maxWidth="sm">
            <Card sx={{ minWidth: 275, boxShadow: 4 }}>
              <CardContent>
                <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                  Rotation Utilities
                </Typography>
                <hr />
                <Box className="box1" sx={{ mx: 17 }}>
                  <Button variant="contained">.rotate-15</Button>
                </Box>
                <hr />
                <Box className="box2" sx={{ mx: 17 }}>
                  <Button variant="contained">.rotate-n-15</Button>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
      <br />
      <Grid container columns={12} spacing={3}>
        <Grid item xs={12} lg={6} md={6}>
          <Container maxWidth="sm">
            <Card sx={{ boxShadow: 4, minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                  Progress Small Utility
                </Typography>
                <hr />
                <Typography sx={{ fontSize: 13, color: "#858796" }}>
                  Normal Progress Bar
                </Typography>
                /nvudnvuvnunvujf
                <Typography sx={{ fontSize: 13, color: "#858796" }}>
                  Small Progress Bar
                </Typography>
                fnbhvbnfvbnvnf
                <Typography sx={{ mb: 1.5 }}>
                  {" "}
                  Use the<span style={{ color: "red" }}>
                    {" "}
                    .progress-sm
                  </span>{" "}
                  class along with{" "}
                  <span style={{ color: "red" }}>.progress</span>
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
      <br />
      <Grid container columns={12} spacing={3}>
        <Grid item xs={12} lg={6} md={6}>
          <Container maxWidth="sm">
            <Card sx={{ boxShadow: 4, minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                  Dropdown - No Arrow
                </Typography>
                <hr />
                <Box>
                  <Box
                    sx={{
                      bgcolor: "#858796",
                      color: "#fff",
                      maxWidth: 110,
                      borderRadius: 2,
                    }}
                  >
                    <Button onClick={handleClick} fontWeight="normal">
                      Dropdown
                    </Button>
                  </Box>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Action</MenuItem>
                    <MenuItem onClick={handleClose}>Another action </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Something else here
                    </MenuItem>
                  </Menu>
                </Box>
                <Typography sx={{ mb: 1.5 }}>
                  Add the<span style={{ color: "red" }}>.no-arrow</span> class
                  alongside the <span style={{ color: "red" }}>.dropdown</span>
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
