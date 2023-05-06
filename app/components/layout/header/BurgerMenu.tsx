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
      />
      <MenuList
        boxSize={"md"}
        minWidth="100vw"
        filter="brightness(90%)"
        fontSize={"6xl"}
      >
        <MenuOptionGroup type="radio">
          <MenuItem
            h="33%"
            icon={<Icon as={BsIcons.BsPersonWorkspace} />}
            fontWeight={"semibold"}
          >
            Work
          </MenuItem>
          <MenuItem
            h="33%"
            icon={<Icon as={MdIcons.MdOutlineDeveloperBoard} />}
            fontWeight={"semibold"}
          >
            Projects
          </MenuItem>
          <MenuItem
            h="33%"
            icon={<Icon as={GrIcons.GrContact} />}
            fontWeight={"semibold"}
          >
            Contact
          </MenuItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;
