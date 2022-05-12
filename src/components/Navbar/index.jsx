import { Box } from "@mui/system";
import React, { Profiler } from "react";
import Search from "./Search";
import Profil from "./Profil";

export default () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: { md: "flex", sm: "flex", xs: "none" },
            width: { md: 540, sm: 660 },
          }}
        >
          <Search />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Profil />
        </Box>
      </Box>
    </>
  );
};
