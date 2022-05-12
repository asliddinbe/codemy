import {
	Box,
	Button,
	ButtonGroup,
	Divider,
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import DoneIcon from "@mui/icons-material/Done";
import { FaFacebookF } from "react-icons/fa";
import { IoInformationCircleSharp, IoWarningSharp } from "react-icons/io5";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import "./index.css";

const Icons = (props) => {
	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ my: "2%", width: "100%" }}>
					<Typography variant="p" sx={{ color: "red", fontFamily: "serif" }}>
						{props.name}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", gap: "2px", width: "100%" }}>
					<IconButton
						aria-label="delete"
						size={props.size}
						sx={{ bgcolor: "#4E73DF", ":hover": { bgcolor: "#4E73DF" } }}
					>
						<FaFacebookF
							style={{
								color: "white",
							}}
						/>
					</IconButton>
					<IconButton
						aria-label="delete"
						size={props.size}
						sx={{ bgcolor: "#1CC88A", ":hover": { bgcolor: "#1CC88A" } }}
					>
						<DoneIcon
							fontSize="inherit"
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
					<IconButton
						aria-label="delete"
						size={props.size}
						sx={{ bgcolor: "#36B9CC", ":hover": { bgcolor: "#36B9CC" } }}
					>
						<IoInformationCircleSharp
							style={{
								color: "white",
							}}
						/>
					</IconButton>
					<IconButton
						aria-label="delete"
						size={props.size}
						sx={{ bgcolor: "#F6C23E", ":hover": { bgcolor: "#F6C23E" } }}
					>
						<IoWarningSharp
							style={{
								color: "white",
							}}
						/>
					</IconButton>
					<IconButton
						aria-label="delete"
						size={props.size}
						sx={{ bgcolor: "red", ":hover": { bgcolor: "red" } }}
					>
						<DeleteIcon
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
				</Box>
			</Box>
		</>
	);
};
const BTNdata = [
	{ color: "primary", icon: <ArrowForwardIcon /> },
	{ color: "success", icon: <DoneIcon /> },
	{ color: "info", icon: <ReportProblemIcon /> },
	{ color: "warning", icon: <ErrorIcon /> },
	{ color: "error", icon: <DeleteIcon /> },
	{ color: "secondary", icon: <ArrowForwardIcon /> },
	{ color: "inherit", icon: <ArrowForwardIcon /> },
];
const Buttons = BTNdata.map((item) => (
	<ButtonGroup
		variant="contained"
		// aria-label="outlined primary button group"
		color={item.color}
		sx={{ boxShadow: "none", my: "5px" }}
	>
		<Button sx={{ width: "30px" }}>{item.icon}</Button>
		<Button sx={{ px: "3px" }}>Split Button {item.color}</Button>
	</ButtonGroup>
));

export default () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: "linear-gradient(#EBECEF, #F8F9FC, #EBECEF)",
					width: "100%",
				}}
			>
				<Box sx={{ width: "100%", px: "2%", pt: "1.5%", pb: "0.3%" }}>
					<Typography variant="h5">Buttons</Typography>
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
									<Typography fontWeight="bold" sx={{ color: "#4E73DF" }}>
										Circle Buttons
									</Typography>
								</Box>
								<Divider />
								<Box sx={{ p: "2.6%" }}>
									<Typography sx={{ color: "#A3A4A6" }}>
										Use Font Awesome Icons (included with this theme package)
										along with the <br /> circle buttons as shown in the
										examples below!
									</Typography>
									<Box>
										<Icons size="medium" name=".btn-circle" />
										<Icons size="small" name=".btn-circle .btn-sm" />
										<Icons size="large" name=".btn-circle .btn-lg" />
									</Box>
								</Box>
							</Paper>
							<br />
							<br />
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
									<Typography fontWeight="bold" sx={{ color: "#4E73DF" }}>
										Brand Buttons
									</Typography>
								</Box>
								<Divider />
								<Box sx={{ p: "2.6%" }}>
									<Typography variant="p" sx={{ color: "#A3A4A6" }}>
										Google and Facebook buttons are available featuring each
										company's respective brand color. They are used on the user
										login and registration pages. <br />
										<br /> You can create more custom buttons by adding a new
										color variable in the _variables.scss file and then using
										the Bootstrap button variant mixin to create a new style, as
										demonstrated in the _buttons.scss file.
									</Typography>
									<Box
										sx={{
											width: "100%",
											display: "flex",
											gap: 1,
											flexDirection: "column",
											my: "3%",
										}}
									>
										<Button
											sx={{ width: "100%", bgcolor: "red" }}
											variant="contained"
											disableElevation
										>
											<GoogleIcon fontSize="small" sx={{ mx: "1%" }} />{" "}
											.btn-google
										</Button>
										<Button
											sx={{ width: "100%", bgcolor: "#3B5998" }}
											variant="contained"
											disableElevation
										>
											<FacebookIcon fontSize="small" sx={{ mx: "1%" }} />{" "}
											.btn-google
										</Button>
									</Box>
								</Box>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
									<Typography fontWeight="bold" sx={{ color: "#4E73DF" }}>
										Split Buttons with Icon
									</Typography>
								</Box>
								<Divider />
								<Box sx={{ p: "2.6%" }}>
									<Typography sx={{ color: "#A3A4A6" }}>
										Works with any button colors, just use the .btn-icon-split
										class and the markup in the examples below. The examples
										below also use the .text-white-50 helper class on the icons
										for additional styling, but it is not required.
									</Typography>
									<Box
										sx={{
											boxShadow: "none",

											display: "flex",
											flexDirection: "column",
										}}
									>
										{Buttons}
									</Box>
									<Typography>
										Also works with small and large button classes!
									</Typography>
									<ButtonGroup
										variant="contained"
										size="small"
										sx={{ boxShadow: "none", my: "5px" }}
									>
										<Button sx={{ width: "30px" }}>
											<ArrowForwardIcon />
										</Button>
										<Button sx={{ px: "3px" }}>split button small</Button>
									</ButtonGroup>
									<br />
									<ButtonGroup
										variant="contained"
										size="large"
										sx={{ boxShadow: "none", my: "5px" }}
									>
										<Button sx={{ width: "30px" }}>
											<ArrowForwardIcon />
										</Button>
										<Button sx={{ px: "3px" }}>split button large</Button>
									</ButtonGroup>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
};
