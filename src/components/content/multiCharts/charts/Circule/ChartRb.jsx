import * as React from "react";
import { Graph } from "./Graph";
import CharF from "../Char_4";
import { Grid2 } from "@mui/material";

export const ChartRb = () => {
  return (
    <Grid2
      container
      rowSpacing={1}
      sx={{
        background: "#2F363D",
        borderRadius: "1rem",
        height: { lg: "100%", xs: "120%" },
      }}
    >
      <Grid2 sx={{ marginLeft: { xs: "30%", lg: "0%" } }}>
        <Graph />
      </Grid2>

      <Grid2 xs={6} sx={{ display: { xs: "none", lg: "block" } }}>
        <CharF />
      </Grid2>
    </Grid2>
  );
};
