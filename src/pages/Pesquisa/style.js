import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   
`

export const ContainerImagemFundo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    min-height: 50vh; 
    width: 100%;
`



export const ContainerSaudacao = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    


    h2 {
        color: #fffff7;
        font-size: 20px;
        font-weight: 700;
    }

    p {
        color: #fffff7;
        font-size: 14px;
        font-weight: 700;
    }

    span {
        color: #166dd7;
    }
`

export const ContainerPesquisarCliente = styled.div `
    background-color: #FFFFFF;
    width: 50%;
    height: 190px;
    position: absolute;
    text-align: center;
    top: 40%;
    margin-bottom: 40px;
    border-radius: 4px;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);

    p {
        font-size: 14px;
        font-weight: 600;
        color: #1A202C;
        margin: 20px 0px 20px;
    }
`

export const Footer = styled.div `
    position: absolute;
    bottom: 40px;
    z-index: 1;
`

export const LinkSair = styled(Link) `
    color: #166dd7;
    cursor: pointer;
    text-decoration: none;
`

export const InputWrapper = styled.div`
    position: relative;
    display: inline-block;

`

export const BotaoLimpar = styled.button`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: 2px solid #949494;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    color: #808080;
    height: 20px;
    width: 20px;
    padding-bottom: 18px;
    

    &:hover {
        color: #4a5568;
    }
`
   