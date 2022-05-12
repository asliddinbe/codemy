import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import car from "../../assets/img/dog-5723334_1920.jpg";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function index() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#355CCB",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        pt: "50px",
        pb: "162px",
      }}
    >
      <Container>
        <Grid
          container
          xs={12}
          sx={{ background: "white", borderRadius: "15px" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={car}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                display: "flex",
              }}
            />
          </Grid>
          <Grid
            item
            spacing={2}
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ pt: "20px" }}>
              Welcome Back!
            </Typography>
            <OutlinedInput
              placeholder="Enter Email Adress..."
              sx={{
                width: "70%",
                borderRadius: "50px",
                height: "50px",
                margin: "15px 0px 10px 0px",
              }}
            />
            <OutlinedInput
              placeholder="Password..."
              sx={{
                width: "70%",
                borderRadius: "50px",
                height: "50px",
                margin: "15px 0px 10px 0px",
              }}
            />
            <FormControlLabel
              value="end"
              label="Remember me"
              control={<Checkbox sx={{ ml: "-65%" }} color="primary" />}
            />
            <Button
              variant="outlined"
              sx={{
                width: "70%",
                borderRadius: "50px",
                height: "50px",
                margin: "10px 0px 15px 0px",
                ":hover": {
                  background: "none",
                  border: "2px solid #4E73DF",
                  color: "#4E73DF",
                },
                background: "#4E73DF",
                color: "white",
                border: "none",
              }}
            >
              Login
            </Button>
            <hr style={{ width: "70%" }} />
            <Button
              variant="outlined"
              sx={{
                width: "70%",
                borderRadius: "50px",
                height: "50px",
                margin: "10px 0px 15px 0px",
                ":hover": {
                  background: "none",
                  border: "2px solid #EA4335",
                  color: "#EA4335",
                },
                background: "#EA4335",
                color: "white",
                border: "none",
              }}
            >
              <GoogleIcon />
              Login with Google
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "70%",
                borderRadius: "50px",
                height: "50px",
                margin: "10px 0px 15px 0px",
                ":hover": {
                  background: "none",
                  border: "2px solid #4E73DF",
                  color: "#4E73DF",
                },
                background: "#4E73DF",
                color: "white",
                border: "none",
              }}
            >
              <FacebookIcon />
              Login with Facebook
            </Button>
            <hr style={{ width: "70%" }} />
            <Link sx={{ margin: "15px 0px 5px 0px" }}>Forgot Password?</Link>
            <Link sx={{ margin: "5px 0px 30px 0px" }}>Create an Account!</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
