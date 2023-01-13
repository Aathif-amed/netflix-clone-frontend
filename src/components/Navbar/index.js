import "./navbar.scss";
import svg from "../../assets/netflix.png";
import React from "react";
import { Search } from "@mui/icons-material";

function Index() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={svg} alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
            <Search />
            <span>Kid</span>
        </div>
      </div>
    </div>
  );
}

export default Index;
