import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./burger.styled";
import useProgressiveImg from "../../../utils/progressiveImg";

type BurgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Burger: React.FC<BurgerProps> = ({ open, setOpen }: BurgerProps) => {
  const isExpanded = open ? true : false;
  const { src, blur } = useProgressiveImg("./logo1.svg", "./logo1.jpg");
  return (
    <div>
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </StyledBurger>
      <img
        alt="MountWater Logo"
        src={src}
        style={{
          width: 64,
          position: "absolute",
          zIndex: 8,
          top: "5%",
          left: "5em",
          filter: blur ? "blur(20px)" : "none",
          transition: blur ? "none" : "filter 0.3s ease-out",
        }}
      />
    </div>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
