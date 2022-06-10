import styled from "styled-components";
import headerImg from '../../assets/images/header-image.jpg';

export const Container = styled.header`
    height: calc(100vh - 150px);
    background-image: url(${headerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    padding: 15px;
`

export const NavName = styled.p`
    font-weight: bold;
    color: #000;
    font-size: 17px;
`

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
    margin: 0 10px;
`

export const NavItem = styled.li`
    color: #000;
    font-size: 17px;
`

export const MainContent = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 110px auto;
    text-align: center;
`

export const MainTitleTop = styled.h1`
    font-family: 'Header Font', serif;
    font-size: 10em;
    margin: 0;
    line-height: 130px;
    background: linear-gradient(145deg, #858f77, #6a7753, #677D4D, #2F3920, #1F2614);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`

export const MainTitleBottom = styled.h1`
    font-family: 'Header Font', serif;
    font-size: 3.5em;
    background: linear-gradient(145deg, #443e34, #302f28, #24241C);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-align: center;
    margin-bottom: 15px;
`

export const MainDescription = styled.p`
    color: #000;
    font-size: 17px;
    font-weight: bold;
`