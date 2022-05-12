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
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import React, { useState } from "react";
  import ReactApexChart from "react-apexcharts";
  import { useNavigate } from "react-router-dom";
  import Chart from "react-apexcharts";
  function App() {
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
	const [state, setState] = useState({
	  options: {
		chart: {
		  type: "donut",
		},
		dataLabels: {
		  enabled: false,
		},
		legend: {
		  show: false,
		},
		responsive: [
		  {
			options: {
			  chart: {
				width: "100%",
				height: "100%",
			  },
			},
		  },
		],
	  },
  
	  series: [55, 30, 15],
	});
  
	const navigate = useNavigate();
	return (
	  <Paper elevation={3} sx={{ borderRadius: 2, height: "60vh" }}>
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
			Revenue Sources
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
		<Box
		  sx={{
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		  }}
		>
		  <Box sx={{ mx: "10%", my: "7%" }}>
			<Chart
			  options={state.options}
			  series={state.series}
			  type="donut"
			  width="100%"
			/>
		  </Box>
		</Box>
	  </Paper>
	);
  }
  
  export default App;