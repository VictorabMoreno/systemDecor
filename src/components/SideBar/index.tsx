import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsPeople} from 'react-icons/bs'
import {BiParty, BiSearch} from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi';
import { AlternativeMenuContainer, CompanyImage, Container, ContainerMenu, Grid, Icon, LogOut, LogOutText, MenuContainer, MenuText, Title } from "./styles";
export const Menu = ({iconOutline, iconFill, menuText, activateMenu, route}:any) => {
    const [isFilled, setIsFilled] = useState(false);
  
    const handleClick = () => {
     
    };

    console.log(menuText, activateMenu)
  
    return (
      <ContainerMenu style={{backgroundColor:activateMenu?'#DDD':'transparent'}} as={Link} to={route}  onClick={handleClick}>
        {activateMenu  ? iconOutline : iconFill}
        <MenuText>{activateMenu? <b>{menuText}</b>: menuText}</MenuText>
      </ContainerMenu>
    );
  };


export const SideBar = ({menu}:any) => {
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
    // Outras ações de logout, se necessário
  };
  return (
      <Container>
          <Grid>
          <CompanyImage>
            <img src="./logo.png"/>
            <p>Flávia Decor</p>
          </CompanyImage>
             <MenuContainer>
             <Menu
        iconFill={<BsPeople color="#343442" size={18} />}
        iconOutline={<BsPeople size={18} />}
        menuText="Clientes"
        route="/"
        activateMenu={menu === 'Home' ? true : false}
      />
      <Menu
        iconFill={<BiSearch color="#343442" size={18} />}
        iconOutline={<BiSearch size={18} />}
        menuText="Buscar"
        route="/search"
        activateMenu={menu === 'Buscar' ? true : false}
      />
      <Menu
        iconFill={<BiParty color="#343442" size={18} />}
        iconOutline={<BiParty size={18} />}
        menuText="Eventos"
        route="/eventos"
        activateMenu={menu === 'Eventos' ? true : false}
      /></MenuContainer>
      <LogOut onClick={handleLogout}>
        <FiLogOut size={20}/>
        <LogOutText>Sair</LogOutText>
      </LogOut>
          </Grid>
      </Container>
  )
}