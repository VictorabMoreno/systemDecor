import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';
import { AlternativeMenuContainer, Container, ContainerMenu, Grid, Icon, MenuContainer, MenuText, Title } from "./styles";
export const Menu = ({iconOutline, iconFill, menuText, activateMenu, route}:any) => {
    const [isFilled, setIsFilled] = useState(false);
  
    const handleClick = () => {
     
    };

    console.log(menuText, activateMenu)
  
    return (
      <ContainerMenu as={Link} to={route}  onClick={handleClick}>
        {activateMenu  ? iconOutline : iconFill}
        <MenuText>{activateMenu? <b>{menuText}</b>: menuText}</MenuText>
      </ContainerMenu>
    );
  };


export const SideBar = ({menu}:any) => {
  return (
      <Container>
          <Grid>
          <img id="logo-simova" src="./simova-logo.png" alt="" />
             <MenuContainer>
                <Menu iconFill={<FaHome color='#343442' size={16}/>} iconOutline={<FaHome size={16}/>} menuText='Home' route='/' activateMenu={menu == 'home'? true: false}/>
                <Menu iconFill={<FaUser color='#343442' size={16}/>} iconOutline={<FaUser size={16}/>} menuText='Clientes' route='/vagas' activateMenu={menu == 'vagas'? true: false}/>
                <Menu iconFill={<FaSearch color='#343442' size={16}/>} iconOutline={<FaSearch size={16}/>} menuText='Search' route='/candidaturas' activateMenu={menu == 'candidaturas'? true: false}/>
             </MenuContainer>
          </Grid>
      </Container>
  )
}