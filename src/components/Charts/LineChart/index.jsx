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
				type: "area",
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			xaxis: {
				type: "datetime",
				categories: [
					"2018-09-19T00:00:00.000Z",
					"2018-09-19T01:30:00.000Z",
					"2018-09-19T02:30:00.000Z",
					"2018-09-19T03:30:00.000Z",
					"2018-09-19T04:30:00.000Z",
					"2018-09-19T05:30:00.000Z",
					"2018-09-19T06:30:00.000Z",
					"2018-09-19T07:30:00.000Z",
					"2018-09-19T08:30:00.000Z",
					"2018-09-19T09:30:00.000Z",
					"2018-09-19T10:30:00.000Z",
					"2018-09-19T11:30:00.000Z",
					"2018-09-19T12:30:00.000Z",
				],
			},
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm",
				},
			},
		},

		series: [
			{
				name: "series1",
				data: [
					10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
					35000, 30000, 40000,
				],
			},
		],
	});

	const navigate = useNavigate();
	return (
		<Paper elevation={3} sx={{ borderRadius: 2,height:"60vh"}}>
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
					Earnings Overview
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
			<Box sx={{ width: "100%", py:"3%", }}>
				<Chart
					options={state.options}
					series={state.series}
					type="area"
					width="100%"
					height="155%"
					
				/>
			</Box>
		</Paper>
	);
}

export default App;
