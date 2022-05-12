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

import React from "react";

export default () => {
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
								height: "100vh",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Typography variant="h5">Blank Page</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};
