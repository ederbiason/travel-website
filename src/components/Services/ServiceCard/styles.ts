import styled from "styled-components";

export const Card = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
`

export const Icon = styled.div`
    margin-bottom: 30px;
    transition: all ease .5s;

    &:hover {
        transform: scale(1.2);
    }
`

export const CardContent = styled.div`
    height: 180px;
    text-align: center;
`

export const CardTitle = styled.h1`
    font-size: 1.3rem;
    margin-bottom: 15px;
    font-weight: bold;
    transition: all 1s;

    &:hover {
        color: #677D4D;
        transform: scale(1.1);
    }
`

export const CardDescription = styled.p`
    font-size: .8rem;
    color: grey;
`