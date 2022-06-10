import styled from "styled-components";

export const Card = styled.div`
    width: 250px;
    height: 350px;
    background-color: #fff;
    border-radius: 24px 0;
    color: #000;
    margin: 25px;
    position: relative;

    > img {
        width: 250px;
        height: 200px;
        border-radius: 24px 0 0;
        object-fit: cover;
    }
`

export const CardTagTop = styled.div`

`

export const CardTagBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 165px;
    background: #3793E8;
    border-radius: 0 8px 8px 0;
    padding: .5px 10px;
    font-size: 1rem;
    margin: 0;
    color: white;
    font-weight: bold;
`

export const CardContent = styled.div`
    padding: 0 15px;
`

export const CardTitle = styled.h1`
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
`

export const CardDescription = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const CardDescriptionItem = styled.li`
    font-size: .9rem;
    display: flex;
    align-items: center;
    margin: 6px 0;
    color: grey;
    font-weight: bold;
`