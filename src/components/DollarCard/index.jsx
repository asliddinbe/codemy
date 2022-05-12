import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import BackpackIcon from "@mui/icons-material/Backpack";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { styled } from "@mui/material/styles";
import ForumIcon from "@mui/icons-material/Forum";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
	},
}));
export default () => {
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<Grid container sx={{ display: "flex" }}>
					<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
						<Paper elevation={1} sx={{ borderRadius: 2, mx: "3.5%", my: "2%" }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-around",
									py: "9%",
									borderLeft: "5px solid #4B70DD",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="p"
										fontWeight="bold"
										sx={{ color: "#4B70DD", fontSize: "12px" }}
									>
										EARNINGS (MONTHLY)
									</Typography>
									<Typography variant="h6" fontWeight="bold">
										$40,000
									</Typography>
								</Box>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<BackpackIcon sx={{ fontSize: "45px", opacity: 0.3 }} />
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={3}
						xl={3}
						// sx={{ border: 1 }}
					>
						<Paper elevation={1} sx={{ borderRadius: 2, mx: "3.5%", my: "2%" }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-around",
									py: "9%",
									borderLeft: "5px solid #27CB90",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="p"
										fontWeight="bold"
										sx={{ color: "#27CB90", fontSize: "12px" }}
									>
										EARNINGS (ANNUAL)
									</Typography>
									<Typography variant="h6" fontWeight="bold">
										$215,000
									</Typography>
								</Box>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<CurrencyExchangeIcon
										sx={{ fontSize: "45px", opacity: 0.3 }}
									/>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={3}
						xl={3}
						// sx={{ border: 1 }}
					>
						<Paper elevation={1} sx={{ borderRadius: 2, mx: "3.5%", my: "2%" }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-around",
									py: "9%",
									borderLeft: "5px solid #36B9CC",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="p"
										fontWeight="bold"
										sx={{ color: "#36B9CC", fontSize: "12px" }}
									>
										TASKS
									</Typography>

									<Typography variant="h6" fontWeight="bold">
										50%
									</Typography>
								</Box>
								<Box sx={{ width: "40%" }}>
									<BorderLinearProgress
										variant="determinate"
										value={50}
										sx={{ mt: "20%" }}
									/>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center" }}>
									<AssignmentIcon sx={{ fontSize: "45px", opacity: 0.3 }} />
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={3}
						xl={3}
						// sx={{ border: 1 }}
					>
						<Paper elevation={1} sx={{ borderRadius: 2, mx: "3.5%", my: "2%" }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-around",
									py: "9%",
									borderLeft: "5px solid #F1C147",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="p"
										fontWeight="bold"
										sx={{ color: "#F1C147", fontSize: "12px" }}
									>
										PENDING REQUESTS
									</Typography>

									<Typography variant="h6" fontWeight="bold">
										18
									</Typography>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center" }}>
									<ForumIcon sx={{ fontSize: "45px", opacity: 0.3 }} />
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};
