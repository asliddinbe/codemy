import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Container,
  Typography,
  Box,
  CardContent,
  Card,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  const data = [
    {
      text: ".border-left-primary",
      bgcolor: "#4E73DF",
    },
    {
      text: ".border-left-secondary",
      bgcolor: "#858796",
    },
    {
      text: ".border-left-success",
      bgcolor: "#1CC88A",
    },
    {
      text: ".border-left-info",
      bgcolor: "#36B9CC",
    },
    {
      text: ".border-left-warning",
      bgcolor: "#F6C23E",
    },
    {
      text: ".border-left-danger",
      bgcolor: "#E74A3B",
    },
    {
      text: "bg-gradient-light",
      bgcolor: "#8C879C",
    },
    {
      text: ".border-left-dark",
      bgcolor: "#5A5C69",
    },
  ];

  const itemData = [
    {
      text: ".bg-gray-100",
      bgcolor: "#F8F9FC",
      color: "#858796",
    },
    {
      text: " .bg-gray-200",
      bgcolor: "#EAECF4",
      color: "#858796",
    },
    {
      text: ".bg-gray-300",
      bgcolor: "#DDDFEB",
      color: "#858796",
    },
    {
      text: ".bg-gray-400",
      bgcolor: "#D1D3E2",
      color: "#858796",
    },
    {
      text: ".bg-gray-500",
      bgcolor: "#B7B9CC",
      color: "#fff",
    },
    {
      text: " .bg-gray-600",
      bgcolor: "#858796",
      color: "#fff",
    },
    {
      text: " .bg-gray-700",
      bgcolor: "#6E707E",
      color: "#fff",
    },
    {
      text: " .bg-gray-800",
      bgcolor: "#5A5C69",
      color: "#fff",
    },
    {
      text: ".bg-gray-900",
      bgcolor: "#3A3B45",
      color: "#fff",
    },
  ];

  return (
    <React.Fragment>
      <Grid item xs={12} md={4}>
        <Container maxWidth="sm">
          <Card sx={{ minWidth: 275, boxShadow: 4 }}>
            <CardContent>
              <Box sx={{ bgcolor: "#F8F9FC" }}>
                <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                  Custom Text Color Utilities
                </Typography>
                <hr />
              </Box>
              <Box sx={{ bgcolor: "#5A5C69", color: "#EEF9FC" }}>
                <Typography>
                  .text-gray-100
                  <br />
                  <br />
                  .text-gray-200
                  <br />
                  <br />
                  .text-gray-300
                  <br />
                  <br />
                  .text-gray-400
                </Typography>
              </Box>
              <Typography sx={{ mb: 1.5 }} color="#BBCAE3" component="div">
                .text-gray-500
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="#988796" component="div">
                .text-gray-600
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="#77747E" component="div">
                .text-gray-700
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="#5F6B77" component="div">
                .text-gray-800
              </Typography>
              <Typography sx={{ mb: 1.5 }} component="div">
                .text-gray-900
              </Typography>
            </CardContent>
          </Card>
        </Container>
        <br />
        <Container maxWidth="sm">
          <Card sx={{ minWidth: 275, boxShadow: 4 }}>
            <CardContent>
              <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                Custom Font Size Utilities
              </Typography>
              <hr />
              <Typography sx={{ mb: 2.5 }} variant="h8" color="text.secondary">
                .text-xs
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
                .text-lg
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Grid>

      <Grid item xs={12} md={4}>
        <Container maxWidth="sm">
          <Card sx={{ minWidth: 320, boxShadow: 4 }}>
            <CardContent>
              <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                Custom Background Utilities
              </Typography>
              <hr />
              {data.map((item, index) => (
                <Box
                  sx={{
                    p: 6,
                    width: "55vh",
                    bgcolor: `${item.bgcolor}`,
                    color: "#fff",
                  }}
                >
                  {item.text}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Container>
      </Grid>
      <Grid item xs={12} md={4}>
        <Container maxWidth="sm">
          <Card sx={{ minWidth: 320, boxShadow: 4 }}>
            <CardContent>
              <Typography sx={{ color: "#4E73DF", fontWeight: "bold" }}>
                Custom Grayscale Background Utilities
              </Typography>
              <hr />
              {itemData.map((item, index) => (
                <Box
                  sx={{
                    p: 2,
                    width: "55vh",
                    bgcolor: `${item.bgcolor}`,
                    color: `${item.color}`,
                  }}
                >
                  {item.text}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </React.Fragment>
  );
}

export default () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F8F9FC" }}>
      <Typography sx={{ fontSize: 25, color: "#5A5C72", ml: 3 }}>
        Color Utilities{" "}
      </Typography>
      <Typography sx={{ fontSize: 15, color: "#8C879C", ml: 3 }}>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this <br /> theme past the default utility classes built into
        Bootstrap's framework.{" "}
      </Typography>
      <br />
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
};
