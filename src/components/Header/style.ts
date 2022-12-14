import styled from "styled-components";

export const Container = styled.header`
  background-color: #49065e;
  height: 10vh;
`;

export const Wrapper = styled.div`
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
 
`;

export const Logo = styled.h1`
  color: #fff;
  margin: 0 auto;
  @media (max-width:360px){
    font-size:25px;
  }
`;
export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;