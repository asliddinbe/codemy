import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import car from "../../assets/img/dog-5723334_1920.jpg";
import Container from "@mui/material/Container";

export default function index() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#355CCB",
        height: "100    %",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid
          container
          xs={12}
          sx={{
            background: "white",
            margin: "100px 0px 100px 0px",
            borderRadius: "15px",
          }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ mt: "5%", mb: "5%" }}>
            <img
              src={car}
              style={{
                width: "90%",
                height: "60vh",
                borderRadius: "15px",
                display: "flex",
                marginLeft: "5%",
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
              Forgot Your Password?
            </Typography>
            <Typography variant="subtitle1" sx={{ width: "80%" }}>
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
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
              }}
            >
              {" "}
              Reset Password
            </Button>
            <hr style={{ width: "70%" }} />
            <Link sx={{ margin: "15px 0px 5px 0px" }}>Create an Account!</Link>
            <Link sx={{ margin: "5px 0px 10px 0px" }}>
              Already have an account? Login!
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
