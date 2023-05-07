import {
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { TriangleLogoSmall } from "./TriangleLogoSmall";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";

const BurgerMenu = () => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<TriangleLogoSmall />}
        variant="unstyled"
        bg={"transparent"}
        border="none"
        // style={{ paddingTop: -2 }}
        // p={0}
        // m={0}
      />
      <MenuList
        boxSize={"md"}
        minWidth="100vw"
        filter="brightness(90%)"
        fontSize={"6xl"}
      >
        <MenuOptionGroup type="radio">
          <AnchorLink href="#work">
            <MenuItem
              h="33%"
              icon={<Icon as={BsIcons.BsPersonWorkspace} />}
              fontWeight={"semibold"}
            >
              Work
            </MenuItem>
          </AnchorLink>
          <AnchorLink href="#projects">
            <MenuItem
              h="33%"
              icon={<Icon as={MdIcons.MdOutlineDeveloperBoard} />}
              fontWeight={"semibold"}
            >
              Projects
            </MenuItem>
          </AnchorLink>
          <AnchorLink href="#contact">
            <MenuItem
              h="33%"
              icon={<Icon as={GrIcons.GrContact} />}
              fontWeight={"semibold"}
            >
              Contact
            </MenuItem>
          </AnchorLink>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;
