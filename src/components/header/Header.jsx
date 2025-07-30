import { Button, Menu, MenuHandler, MenuList,MenuItem } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const[local, setLocal] = useState("EN");
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center">
        <h1 className="text-xl font-bold flex-grow">You me know</h1>
        <div className="flex gap-4">
          <Link to="/home">
            <Button variant="outlined" color="white" ripple={true}>
              Home
            </Button>
          </Link>
          <Button variant="outlined" color="white" ripple={true}>
            About
          </Button>
          <Link to="/review">
            <Button variant="outlined" color="white" ripple={true}>
                Review
              </Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined" color="white" ripple={true}>
              Login
            </Button>
          </Link>
          <Button color="white" ripple={true}>
            Sign Up
          </Button>
          <Menu>
            <MenuHandler>
              <Button variant="outlined" color="white" ripple={true}>
                {local} ▼
              </Button>
            </MenuHandler>
            <MenuList className="bg-white text-black">
              <MenuItem onClick={() => changeLocale("EN")}>English</MenuItem>
              <MenuItem onClick={() => changeLocale("Fr")}>French</MenuItem>
              <MenuItem onClick={() => changeLocale("ES")}>Español</MenuItem>              
            </MenuList>
        </Menu>
        </div>        
      </div>
    </header>
  );
}
