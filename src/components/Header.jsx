import React from "react";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState } from "react";
import {NavLink } from "react-router-dom"
const Header = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <AppBar position="sticky" sx={{backgroundColor:"#232f3d"}}>
        <Toolbar>
          <NavLink to="/" sx={{color:"white"}}>
          <Typography>
            <MenuBookIcon />
          </Typography>
          </NavLink>
          <Tabs
          sx={{ml:"auto"}}
            textColor="Inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Products" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
