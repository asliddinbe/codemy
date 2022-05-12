import {
	Box,
	Button,
	Divider,
	Grid,
	LinearProgress,
	Link,
	Menu,
	MenuItem,
	Paper,
	Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import React from "react";
import DollarCard from "../../components/DollarCard";
import LineChart from "../../components/Charts/LineChart/index";
import PiaChart from "../../components/Charts/PiaChart";
import ProjectsLine from "../../components/ProjectsLine";
import rasm from "../../assets/img/undraw_posting_photo.svg";
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
			<Box sx={{ width: "100%" }}>
				<Box
					sx={{
						// backgroundImage: "linear-gradient(#EBECEF, #F8F9FC, #EBECEF)",
						bgcolor: "#F8F9FC",
						width: "100%",
						pb: "3%",
					}}
				>
					<Box sx={{ width: "100%", px: "2%", pt: "1.5%", pb: "0.3%" }}>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Typography variant="h5">Dashboard</Typography>
							<Button
								variant="contained"
								size="small"
								sx={{ fontSize: "12px", display: { xs: "none", sm: "flex" } }}
							>
								<FileDownloadIcon sx={{ opacity: 0.4 }} />
								Generate Report
							</Button>
						</Box>
					</Box>
					<Box sx={{ mx: "1%" }}>
						<Grid
							container
							rowSpacing={1}
							sx={{
								my: "1.6%",
							}}
						>
							<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
								<DollarCard />
							</Grid>

							<Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
								<Box sx={{ px: "2%" }}>
									<LineChart />
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
								<Box sx={{ px: "2%" }}>
									<PiaChart />
								</Box>
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<ProjectsLine />
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
												Illustrations
											</Typography>
										</Box>
										<Divider />
										<Box sx={{ width: "100%", p: "3%" }}>
											<Box
												sx={{
													width: "100%",
													display: "flex",
													justifyContent: "center",
												}}
											>
												<img src={rasm} alt="" width="60%" />
											</Box>
											<Typography>
												Add some quality, svg illustrations to your project
												courtesy of unDraw, a constantly updated collection of
												beautiful svg images that you can use completely free
												and without attribution!
											</Typography>
											<br />
											<br />
											<Link href="#" underline="hover">
												{"Browse Illustrations on unDraw →"}
											</Link>
										</Box>
									</Paper>
								</Grid>
								<Grid
									item
									xs={12}
									sm={12}
									md={12}
									lg={12}
									xl={12}
									sx={{ my: "3%" }}
								>
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
												Development Approach
											</Typography>
										</Box>
										<Divider />
										<Box sx={{ width: "100%", p: "3%" }}>
											<Typography>
												SB Admin 2 makes extensive use of Bootstrap 4 utility
												classes in order to reduce CSS bloat and poor page
												performance. Custom CSS classes are used to create
												custom components and custom utility classes.
												<br />
												<br />
												Before working with this theme, you should become
												familiar with the Bootstrap framework, especially the
												utility classes.
											</Typography>
										</Box>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</>
	);
};
