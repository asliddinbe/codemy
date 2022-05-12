import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import DollarCard from "../../components/DollarCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
    <>
      <Box
        sx={{
          // backgroundImage: "linear-gradient(#EBECEF, #F8F9FC, #EBECEF)",
          bgcolor: "#F8F9FC",
          width: "100%",
          pb: "3%",
        }}
      >
        <Box sx={{ width: "100%", px: "2%", pt: "1.5%", pb: "0.3%" }}>
          <Typography variant="h5">Cards</Typography>
        </Box>
        <Box sx={{ mx: "1%" }}>
          <Grid
            container
            rowSpacing={1}
            sx={{
              my: "1.6%",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              // sx={{ border: 1 }}
            >
              <DollarCard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ border: 1 }}
            >
              <Paper elevation={3} sx={{ borderRadius: 2, mx: "2%" }}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#F8F9FC",
                    p: "2.6%",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                >
                  <Typography sx={{ color: "#A3A4A6" }}>
                    Default Card Example
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: "2.6%" }}>
                  <Typography sx={{ color: "#A3A4A6" }}>
                    This card uses Bootstrap's default styling with no utility
                    classes added. Global styles are the only things modifying
                    the look and feel of this default card example.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ border: 1 }}
            >
              <Paper elevation={3} sx={{ borderRadius: 2, mx: "2%" }}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#F8F9FC",
                    p: "2.6%",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    sx={{
                      color: "#4E73DF",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Dropdown Card Example
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </Box>
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: "2.6%" }}>
                  <Typography sx={{ color: "#A3A4A6" }}>
                    Dropdown menus can be placed in the card header in order to
                    extend the functionality of a basic card. In this dropdown
                    card example, the Font Awesome vertical ellipsis icon in the
                    card header can be clicked on in order to toggle a dropdown
                    menu.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ border: 1 }}
            >
              <Paper elevation={3} sx={{ borderRadius: 2, mx: "2%" }}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#F8F9FC",
                    p: "2.6%",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                >
                  <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                    Basic Card Example
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: "2.6%" }}>
                  <Typography sx={{ color: "#A3A4A6" }}>
                    The styling for this basic card example is created by using
                    default Bootstrap utility classes. By using utility classes,
                    the style of the card component can be easily modified with
                    no need for any custom CSS!
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ border: 1 }}
            >
              <Paper elevation={3} sx={{ borderRadius: 2, mx: "2%", my: "2%" }}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{}}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      borderTopLeftRadius: 7,
                      borderTopRightRadius: 7,
                      bgcolor: "#F8F9FC",
                      color: "#4E73DF",
                    }}
                  >
                    <Typography fontWeight="bold">
                      Collapsable Card Example{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      This is a collapsable card example using Bootstrap's built
                      in collapse functionality. Click on the card header to see
                      the card body collapse and expand!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
