import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import car from "../../assets/img/dog-5723334_1920.jpg";
import Container from "@mui/material/Container";
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
        pt: "40px",
        pb: "60px",
      }}
    >
      <Container sx={{ width: "97%" }}>
        <Grid
          container
          xs={12}
          sx={{ background: "white", borderRadius: "5px", height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={car}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
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
            <Typography variant="h5" sx={{ mt: "50px" }}>
              Create an Accoount!
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OutlinedInput
                placeholder="First Name"
                sx={{
                  width: "100%",
                  borderRadius: "50px",
                  height: "50px",
                  margin: "15px 20px 5px 0px",
                }}
              />
              <OutlinedInput
                placeholder="Last Name"
                sx={{
                  width: "100%",
                  borderRadius: "50px",
                  height: "50px",
                  margin: "15px 0px 5px 0px",
                }}
              />
            </Typography>
            <OutlinedInput
              placeholder="Email address"
              sx={{
                width: "90%",
                borderRadius: "50px",
                height: "50px",
                margin: "10px 0px 5px 0px",
              }}
            />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OutlinedInput
                placeholder="Password"
                sx={{
                  width: "80%",
                  borderRadius: "50px",
                  height: "50px",
                  margin: "15px 20px 5px 0px",
                }}
              />
              <OutlinedInput
                placeholder="Repeat password"
                sx={{
                  width: "80%",
                  borderRadius: "50px",
                  height: "50px",
                  margin: "15px 0px 5px 0px",
                }}
              />
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: "50px",
                height: "50px",
                margin: "5px 0px 10px 0px",
                fontSize: "11px",
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
              Register account
            </Button>
            <hr style={{ width: "80%" }} />
            <Button
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: "50px",
                height: "50px",
                margin: "5px 0px 10px 0px",
                fontSize: "11px",
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
              <GoogleIcon sx={{}} />
              Register with Google
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: "50px",
                height: "50px",
                margin: "0px 0px 10px 0px",
                fontSize: "11px",
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
              Register with Facebook
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
