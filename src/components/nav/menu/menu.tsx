import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";

type MenuProps = {
  open: boolean;
};

const Menu: React.FC<MenuProps> = ({ open }: MenuProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Home
      </a>
      <a href="/about" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        About
      </a>
      <a href="/contact" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
