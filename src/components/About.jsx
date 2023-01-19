import { Typography , Box} from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a Crud Application
        </Typography>
        <Typography>By MERN STACK</Typography>
      </Box>
    </div>
  );
};

export default About;
