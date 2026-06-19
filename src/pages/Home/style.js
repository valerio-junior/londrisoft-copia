import styled from 'styled-components';

export const Container = styled.div `
    height: 100vh;
    overflow: hidden;
    display: flex;

    @media(max-width: 998px) {
        justify-content: center;
        align-items: center;
    }
`

export const Sugestao = styled.div `
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    writing-mode: vertical-lr;
    background-color: #46B6EC;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    a {
        text-decoration: none;
        padding: 15px 12px;
        width: 100%;
        font-size: 14px;
        color: inherit;

        &:hover {
            background-color: #1155bb;
            color: #FFF9F8;
        }

    }

`

export const ContainerEsquerda = styled.div `


    img{
        height: 100vh;

        @media(max-width: 998px) {
            display: none;
            
    }
    }

`

export const ContainerLogo = styled.div `
    width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
        margin: 0 0 12px 12px;
    }

`

export const ContainerInput = styled.div `

    display: flex;
    flex-direction: column;
    label {
        font-size: 0.75rem;
        color: rgb(143, 143, 143);
    }
 `


export const Input = styled.input `
    outline: transparent solid 2px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #F0F0F0;
    width: 400px;
    background-color: #F5F5F5;
    font-size: 0.8rem;

    &:focus {
        border: 2px solid #006DB2;
    }
`

export const Button = styled.button `
    margin-top: 0.2rem;
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #166DD7;
    color: #FFFF;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`