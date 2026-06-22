import styled from 'styled-components';

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

    p {
        color: #1A202C;
    }
`
   