import styled from 'styled-components';

export const Container = styled.div `
    height: 100vh;
    overflow: hidden;
    display: flex;
    gap: 80px;

    @media(max-width: 998px) {
        justify-content: center;
        align-items: center;
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

export const ContainerDireita = styled.div `
    width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
        margin: 0 0 8px 8px;
    }

    span {
        color: #ff3333;
            font-size: 12px;
            font-weight: 400;
            margin-top: 5px;
            
    }
`
export const Form = styled.form `
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const ContainerInput = styled.div `

    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 5px;
        font-size: 0.75rem;
        color: rgb(143, 143, 143);
    }
 `


export const Input = styled.input `
    outline: transparent solid 2px;
    padding: 10px 13px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.hasError ? '#ff3333' : '#ccc'};
    width: 350px;
    background-color: #F5F5F5;
    font-size: 0.8rem;

    &:focus {
        border: 2px solid #006DB2;
    }
`

export const Button = styled.button `
    margin-top: 0.2rem;
    width: 150px;
    padding: 12px;
    border-radius: 5px;
    border: none;
    background-color: #1155BB;
    color: #FFFF;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`