import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar";
import Featured from "../../components/Featured";
import List from "../../components/List";
export default function Index() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie"/>
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
