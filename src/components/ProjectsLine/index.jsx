import React from "react";
import {
	Box,
	Button,
	Divider,
	Grid,
	LinearProgress,
	Menu,
	MenuItem,
	Paper,
	Typography,
} from "@mui/material";

const data = [
	{
		text: "Server Migration",
		foiz: "20%",
		val: 20,
		color: "error",
	},
	{
		text: "Sales Tracking",
		foiz: "40%",
		val: 40,
		color: "warning",
	},
	{
		text: "Customer Database",
		foiz: "60%",
		val: 60,
		color: "primary",
	},
	{
		text: "Payout Details",
		foiz: "80%",
		val: 80,
		color: "info",
	},
	{
		text: "Account Setup",
		foiz: "Complete",
		val: 100,
		color: "success",
	},
];
const datacolor = [
	{
		text: "Primary",
		text2: "#4e73df",
		color: "primary",
	},
	{
		text: "Success",
		text2: "#1cc88a",
		color: "success",
	},
	{
		text: "Info",
		text2: "#36b9cc",
		color: "info",
	},
	{
		text: "Warning",
		text2: "#f6c23e",
		color: "warning",
	},
	{
		text: "Danger",
		text2: "#e74a3b",
		color: "error",
	},
	{
		text: "Secondary",
		text2: "#858796",
		color: "secondary",
	},
	{
		text: "Light",
		text2: "#f8f9fc",
		color: "warning",
	},
	{
		text: "Dark",
		text2: "#5a5c69",
		color: "info",
	},
];
const BoxColor = datacolor.map((item) => (
	<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
		<Button
			variant="contained"
			color={item.color}
			// bgcolor={item.color}
			sx={{
				m: "5%",
				p: "8%",
				width: "90%",
				borderRadius: 3,
				display: "flex",
				justifyContent: "start",
			
			}}
		>
			<Box
				sx={{
					color: "white",
				}}
			>
				<Typography sx={{ color: "white" }}>{item.text}</Typography>
				<Typography sx={{ color: "white" }}>{item.text2}</Typography>
			</Box>
		</Button>
	</Grid>
));
const line = data.map((item) => (
	<Box sx={{ my: "5%" }}>
		<Typography
			sx={{
				display: "flex",
				justifyContent: "space-between",
				my: "2px",
			}}
		>
			<Typography fontSize="13px" fontWeight={700}>
				{item.text}
			</Typography>
			<Typography fontSize="13px" fontWeight={700}>
				{item.foiz}
			</Typography>
		</Typography>

		<LinearProgress
			sx={{ borderRadius: 20, height: "17px" }}
			color={item.color}
			variant="determinate"
			value={item.val}
		/>
	</Box>
));
export default () => {
	return (
		<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
			<Paper elevation={3} sx={{ borderRadius: 2, mx: "2%" }}>
				<Box
					sx={{
						width: "100%",
						bgcolor: "#F8F9FC",

						p: "2.6%",
						py: "1%",
						borderTopLeftRadius: 5,
						borderTopRightRadius: 5,
					}}
				>
					<Typography
						fontWeight="bold"
						sx={{
							color: "#4E73DF",
							py: "2%",
						}}
					>
						Projects
					</Typography>
				</Box>
				<Divider />
				<Box sx={{ width: "100%", p: "2%" }}>{line}</Box>
			</Paper>
			<Box>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
					xl={12}
					sx={{ display: "flex", flexWrap: "wrap" }}
				>
					{BoxColor}
				</Grid>
			</Box>
		</Grid>
	);
};
