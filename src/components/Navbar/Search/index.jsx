import { Box, Button, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <InputBase
          placeholder="Search for..."
          sx={{
            border: 2,
            borderTopLeftRadius: "7px",
            borderBottomLeftRadius: "7px",
            borderColor: "silver",
            width: "100%",
          }}
        />
        <Button
          sx={{
            borderRadius: 0,
            border: 1,
            borderTopRightRadius: "7px",
            borderBottomRightRadius: "7px",
            maxWidth: 50,
            minWidth: 10,
            bgcolor: "#4E73DF",
            color: "white",
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
    </>
  );
};
