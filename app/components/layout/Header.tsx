"use client";
import { Link } from "@chakra-ui/next-js";
import AnchorLink from "react-anchor-link-smooth-scroll";

import React from "react";
type props = {
  visitingName: String;
};

const Header = ({ visitingName }: props) => {
  return (
    <div className="flex flex-row items-center justify-between px-10">
      <div>Logo</div>
      <div>{visitingName && <div>welcome {visitingName}</div>}</div>
      <div className="flex justify-around gap-8">
        <AnchorLink href="/">Top</AnchorLink>
        <AnchorLink href="#about">00. About</AnchorLink>
        <AnchorLink href="#work">01. Work</AnchorLink>
        <AnchorLink href={"#projects"}>02. Projects</AnchorLink>
        <AnchorLink href="#contact">03. Contact</AnchorLink>
      </div>
    </div>
  );
};

export default Header;
