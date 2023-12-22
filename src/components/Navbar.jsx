import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import {  useState } from "react";
import {  FaSearch } from "react-icons/fa";
function Navbar({isScrolled}) {
    const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
    const links=[
        {name:"Home", link:"/"},
        {name:"Tv ", link:"/tv"},
        {name:"Movies", link:"/movies"},
        {name:"My List", link:"/mylist"},
    ];
  return (
    <Container>
        <nav className={`flex ${isScrolled?'scrolled':''}`}>
        <div className='left flex a-center j-center'>       
            <div className='brand flex a-center j-center'>
                <img src={logo} alt='logo'/>
            </div>
            <ul className='links flex'>
                {
                    links.map(({name,link})=>{
                        return (
                            <li key={name}>
                                <Link to={link}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='right flex a-center'>
        <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
        </div>
        </nav>
    </Container>
  )
}
//styles from here
const Container = styled.div``;
export default Navbar