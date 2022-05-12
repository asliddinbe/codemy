import React from "react";
import {
  Box,
  Grid,
  Typography,
  CardContent,
  Card,
  NoSsr,
  Container,
} from "@mui/material/";

import "./style.css";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default () => {
  const data = [
    {
      text: ".border-left-primary",
      bordercolor: "#4E73DF",
    },
    {
      text: ".border-left-secondary",
      bordercolor: "#858796",
    },
    {
      text: ".border-left-success",
      bordercolor: "#1CC88A",
    },
    {
      text: ".border-left-info",
      bordercolor: "#36B9CC",
    },
    {
      text: ".border-left-warning",
      bordercolor: "#F6C23E",
    },
    {
      text: ".border-left-danger",
      bordercolor: "#E74A3B",
    },
    {
      text: ".border-left-dark",
      bordercolor: "#5A5C69",
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "#F8F9FC" }}>
        <Typography sx={{ fontSize: 25, color: "#5A5C72", ml: 5 }}>
          Border Utilities{" "}
        </Typography>
        <Typography sx={{ fontSize: 15, color: "#8C879C", mb: 3, ml: 5 }}>
          Bootstrap's default utility classes can be found on the official
          Bootstrap Documentation page. The custom utilities below were created
          to extend this <br /> theme past the default utility classes built
          into Bootstrap's framework.{" "}
        </Typography>
        <Container>
          <Grid container spacing={0} columns={12}>
            <Grid item lg={6} md={6} sm={9} xs={12}>
              <Container maxWidth="sm">
                {data.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 5,
                      width: "90%",
                      bgcolor: "#fff",
                      color: "#000",
                      borderLeft: `3px solid ${item.bordercolor}`,
                      marginBottom: 3,
                      borderRadius: 2,
                      boxShadow: 4,
                    }}
                  >
                    {item.text}
                  </Box>
                ))}
              </Container>
            </Grid>

            <Grid item lg={6} md={6} sm={9} xs={12}>
              <Container maxWidth="sm">
                {data.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 5,
                      marginBottom: 3,
                      width: "95%",
                      bgcolor: "#fff",
                      color: "#000",
                      borderBottom: `3px solid ${item.bordercolor}`,
                      borderRadius: 2,
                      boxShadow: 4,
                    }}
                  >
                    {item.text}
                  </Box>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};