"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

import "../../styles/header.css";
import logo from "../../public/Logo.svg";
import searchIcon from "../../public/SearchIcon.svg";

interface HeaderProps {
  fetchData: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ fetchData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    fetchData(inputValue);
  };

  return (
    <header>
      <Link href="/">
        <div className="logo-container">
          <Image className="logo-handler" src={logo} alt="Food Fix logo" width={50} height={50} />
          <h2 className="brand-name">FoodFix</h2>
        </div>
      </Link>

      <div className="search-bar-container">
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Image src={searchIcon} alt="Search" className="search-icon" onClick={handleSearch} />
      </div>
      <button className="fav-btn">Fav</button>
    </header>
  );
};

export default Header;
