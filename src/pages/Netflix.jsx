import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres());
  },[]);

  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type : "all"}));
  });
  

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero ">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        ></img>
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo"></img>
          </div>
          <div className="buttons flex">
            <button className="flex a-center j-center" onClick={()=>navigate('/player')}>
              <FaPlay />
              Play
            </button>
            <button className="flex a-center j-center">
              <AiOutlineInfoCircle />
              More Info 
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
background-color: black;
.hero{
   position: relative;
  .background-image{
    filter: brightness(60%);
  }
  img{
    height: 100vh;
    width: 100vw;
  }
  .container{
    position: absolute;
    bottom: 5rem;
    .logo{
      img{
        width: 100%; 
        height: 100%;
        margin-left: 5rem; 
      }
    }
    .buttons{
      margin: 5rem;
      gap: 2rem;
      button{
        font-size:1.4rem;
        gap: 1rem;
        border-radius: 0.2rem;
        padding: 0.5rem;
        padding-left: 2rem;
        padding-right:2.4rem;
        border:none;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover{
          opacity:0.8rem;
        }
        &:nth-of-type(2){
          background-color: rgba(109,109,110,0.7);
          color:white;
          svg{
            font-size:1.8rem;
            
          }
        }
      }
    }
  }
}
`;

export default Netflix;
