import { useState, useEffect } from "react";
import { yamiBlue2 } from "../../assets";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const LogoProfile = () => {

  return (
    <Container>
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="w-8 h-8 overflow-hidden border-[1px] border-[#29785e]">
          <img src={yamiBlue2} alt="logo" className="w-8 h-8" />
        </div>
        <h1>
          [ <span className="text-[#46ca9e]">YP-NEXTGEN</span> ]{" "}
          <span className="text-[#46ca9e]">.</span>
        </h1>
      </Link>
    </Container>
  );
};

export default LogoProfile;
