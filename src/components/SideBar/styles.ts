import styled from "styled-components";

export const Container = styled.div`
 width: 250px;
 height: 100vh;
 background:#F0F0F0;
 border-right: 1px solid #ddd;
 position: fixed;
`

export const Title = styled.h1`
  font-size: 32px;
`

export const Grid = styled.div`
 width: 90%;
 margin: auto;
 padding-top: 20px;
 padding-left: 20px;
`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding:  0;
  text-decoration: none;
  color:#171933;
`;

export const Icon = styled.span`
  margin-right: 5px;
  font-size: 20px;
  align-self:center;
`;

export const MenuText = styled.p`
 font-size: 14px;
 font-family: poppins;
 font-weight: 500;
 padding-left: 10px;
 color:#343442;
`

export const MenuContainer = styled.div`
 width: 100%;
 height: auto;
 padding: 30px 0 20px;
 border-bottom: 1px solid #ddd;
`

export const AlternativeMenuContainer = styled.div`
 width: 100%;
 height: auto;
 padding: 10px 0 20px;
`