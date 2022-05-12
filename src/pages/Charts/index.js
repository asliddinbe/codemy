import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  // LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LineChart from "../../components/Charts/LineChart";
import PiaChart from "../../components/Charts/PiaChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data7 = [
  {
    name: "Page B",
    uv: 3000,
    pv: 200,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 600,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 1000,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 1500,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 2000,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
];

const data02 = [
  {
    name: "Group A",
    value: 30,
  },
  {
    name: "Group B",
    value: 15,
  },
  {
    name: "Group C",
    value: 55,
  },
  {
    name: "Group D",
  },
  {
    name: "Group E",
  },
  {
    name: "Group F",
  },
];

const data = [
  {
    name: "Page A",
    pv: 200,
    amt: 2400,
  },
  {
    name: "Jan",
    pv: 600,
    amt: 2210,
  },
  {
    name: "Page B",
    pv: 400,
    amt: 2210,
  },
  {
    name: "Mar",
    pv: 1200,
    amt: 2290,
  },
  {
    name: "Page C",
    pv: 1000,
    amt: 2290,
  },
  {
    name: "May",
    pv: 1600,
    amt: 2000,
  },
  {
    name: "Page D",
    pv: 1400,
    amt: 2000,
  },
  {
    name: "Jul",
    pv: 2100,
    amt: 2181,
  },
  {
    name: "Page E",
    pv: 1900,
    amt: 2181,
  },
  {
    name: "Sep",
    pv: 2800,
    amt: 2500,
  },
  {
    name: "Page F",
    pv: 2600,
    amt: 2500,
  },
  {
    name: "Now",
    pv: 3200,
    amt: 2100,
  },
];
export default () => {
  return (
    <Box sx={{ flexGrow: 1, ml: 5, mt: 5, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            <Typography variant="h4">Charts</Typography>
            <Typography>
              Chart.js is a third party plugin that is used to generate the
              charts in this theme. The charts below have been customized - for
              further customization options, please visit the{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                official Chart.js documentation.
              </a>{" "}
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {/* <Typography
            sx={{ border: "1px solid #E3E6F0", width: "74%", boxShadow: "10" }}
          >
            <Typography
              style={{
                paddingLeft: "80px",
                color: "#5977E0",
                border: "1px solid #E3E6F0",
                background: "#F8F9FC",
              }}
            >
              Area Chart
            </Typography>

            <LineChart
              width={500}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
            <hr style={{ width: "90%" }} />
            <Typography sx={{ width: "100%", textAlign: "center" }}>
              Styling for the bar chart can be found in the{" "}
              <a href="#" style={{ textDecoration: "none", color: "red" }}>
                /js/demo/chart-area-demo.js
              </a>
              file.
              </Typography>
            </Typography> */}
          <LineChart />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          {/* <Typography
            sx={{ border: "1px solid #E3E6F0", width: "74%", boxShadow: "10" }}
          >
            <Typography
              style={{
                paddingLeft: "10px",
                color: "#5977E0",
                border: "1px solid #E3E6F0",
                background: "#F8F9FC",
              }}
            >
              Donut Chart
            </Typography>
            <PieChart width={300} height={250}>
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="40%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
              />
            </PieChart>
            <hr style={{ width: "90%" }} />
            <Typography sx={{ width: "100%", textAlign: "center" }}>
              Styling for the bar chart can be found in the{" "}
              <a href="#" style={{ textDecoration: "none", color: "red" }}>
                /js/demo/chart-pie-demo.js
              </a>{" "}
              file.
            </Typography>
          </Typography> */}
          <PiaChart />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ border: "1px solid #E3E6F0", width: "52%", boxShadow: "10" }}
          >
            <Typography
              style={{
                paddingLeft: "60px",
                color: "#5977E0",
                border: "1px solid #E3E6F0",
                background: "#F8F9FC",
              }}
            >
              Bar Chart
            </Typography>
            <BarChart width={500} height={250} data={data7}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
            <hr style={{ width: "90%" }} />
            <Typography sx={{ width: "100%", textAlign: "center" }}>
              Styling for the bar chart can be found in the{" "}
              <a href="#" style={{ textDecoration: "none", color: "red" }}>
                /js/demo/chart-bar-demo.js
              </a>{" "}
              file.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
