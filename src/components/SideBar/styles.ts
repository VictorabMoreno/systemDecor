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
 padding: 20px;
`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  cursor: pointer;
 padding: 10px;
  text-decoration: none;
  color:#171933;
  border-radius: 10px;
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
 margin: 0;
`

export const MenuContainer = styled.div`
 width: 100%;
 height: auto;
 padding: 10px 0 20px;
 border-bottom: 1px solid #ddd;
`

export const AlternativeMenuContainer = styled.div`
 width: 100%;
 height: auto;
 padding: 10px 0 20px;
`

export const CompanyImage = styled.div`
 display: flex;
 align-items: center;

 >img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
 }

 >p {
  font-size: 14px;
  font-family: poppins;
  font-weight: 500;
  padding-left: 10px;
  color:#343442;
 }
`

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  cursor: pointer;
 padding: 10px;
  text-decoration: none;
  color:#8b0000;
  border-radius: 10px;
  margin-top: 10px;
`;



export const LogOutText = styled.span`
 font-size: 14px;
  font-family: poppins;
  font-weight: 500;
  padding-left: 10px;
 
`;