import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 60px;
    position: relative;
    background-color: #ECFAD8;
`

export const ContactCard = styled.div`
    width: 350px;
    height: 300px;
    background: #dad8d8;
    position: absolute;
    z-index: 99;

    border-radius: 8px;

    top: calc(50% - 150px);
    left: calc(20% - 175px);
    
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    color: #000;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 0 40px;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
    margin-top: 10px;
`

export const Content = styled.ul`
    
`

export const Icon = styled.div`

`

export const Info = styled.a`
    font-size: 1rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-underline-offset: 2.5px;
    text-decoration-color: rgb(163 163 163);
`

export const Item = styled.li`
    margin: 20px 0;
    display: flex;
    align-items: center;
    gap: 5px;
`