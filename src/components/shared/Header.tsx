import React from "react";
import "./Header.css";

interface IProps {
  name: string;
}

function Header({name}: IProps) {
  return (
    <>
      <h1 className="baseHeader">{name}</h1>
    </>
  );
}

export default Header;
