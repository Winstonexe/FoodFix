import React from "react";
import Image from "next/image";

import "../../styles/header.css"

import logo from "../../public/Logo.svg"
import searchIcon from "../../public/SearchIcon.svg"

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo-container">
                <Image className="logo-handler" src={logo} alt="Food Fix logo" width={50} height={50} />
                <h2 className="brand-name">FoodFix</h2>
            </div>
            <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text" />
                <Image src={searchIcon} alt="Search" className="search-icon" />
            </div>
            <button className="fav-btn">Fav</button>
        </header>
    )
}

export default Header;