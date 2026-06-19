import styled from 'styled-components';

export const Container = styled.div `
`

export const Nav = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 0 24px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    position: relative;

    div {
        display: flex;
        align-items: center;
    }

    button {
        width: 100px;
        padding: 8px;
        font-size: 14px;
        font-weight: 400;
        border: none;
        border-radius: 0px 4px 4px 0px;
        background-color: #166dd7;
        color: #FFFF;
        cursor: not-allowed;
        opacity: 0.5;

        &:hover {
            opacity: 0.4;
        }
    }

    p {
        margin: 0 30px 0 5px;
        font-size: 14px;
    }

    span {
        font-size: 12px;
        font-weight: 600;
        margin-left: 4px;
    }
`

export const Input = styled.input `
    width: 495px;
    padding: 5px;
    outline: none;
    border-radius: 2px;
    border: 1px solid #d8d8d8;
    background-color: transparent;

    &::placeholder {
        font-size: 13px;
    }
`

export const DivImagemFoguete = styled.div `
width: 100%;
margin-top: 20px;

img {
    width: 100%
}
 
`

export const ContainerInfoBasica = styled.div `
    display: flex;
    text-align: center;
    margin: 0 200px 0px 10px;

`
export const AreaInformacao = styled.div `
display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px; /* Espaço uniforme entre cada bloco de informação */
    flex-grow: 1; /* Faz esse bloco ocupar o resto do espaço disponível para se centralizar */

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`


export const AreaButton = styled.div `
margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

`

export const ButtonGrupo = styled.button `
    width: 180px;
    padding: 10px;
    margin-top: 40px;
    border: 1px solid #2b6cb0;
    background-color: #ffffff;
    color: #2b74c1;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #ebf8ff;
    }
`

export const IdEmpresaDescricao = styled.p `
`

export const IdEmpresaNumero = styled.p `
    width: 200px;
    font-size: 16px;
    background-color: hsl(0, 0%, 94%);
    border-radius: 5px;
    color: #808080;
    padding: 8px;
    cursor: unset;

    &:focus {
        border: 1px solid hsl(201, 100%, 36%);
    }

`

export const CnpjDescricao = styled.p `
`

export const CnpjNumero = styled.p `
        width: 200px;
    font-size: 16px;
    background-color: hsl(0, 0%, 94%);
    border-radius: 5px;
    color: #808080;
    padding: 8px;
    cursor: unset;

    &:focus {
        border: 1px solid hsl(201, 100%, 36%);
    }
`

export const StatusFinanceiroDescricao = styled.p `
`

export const ButtonStatusFinanceiro = styled.button `
    display: flex;
    align-items: center;
    gap: 40px;
    width: 200px;
    padding: 8px;
    background-color: #008000;
    border: none;
    opacity: 0.3;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    cursor: not-allowed;
`

export const ContainerDataCadastroAlteracao = styled.div `
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 30px;
    
    

`

export const DataCadastroAlteracao = styled.p `
    color: #8f8f8f;
    font-size: 11px;
`

export const ContainerDadosEmpresa = styled.div `
    display: flex;
`

export const ContainerDadosEmpresaEsquerda = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
    }
`

export const ContainerDadosEmpresaDireita = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;


       div {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }
`

export const ContainerDadosEmpresaDireitaInterno = styled.div `
    display: flex !important;
    flex-direction: row !important;


    div {
        margin-right: 0px;
        margin-left: 10px;
        width: 50%;
        display: flex;
        flex-direction: column !important;

       
    }
    
`

export const DescricaoCamposObrigatorios = styled.p `
    font-size: 10px;
    font-weight: 400;
    color: #1A202C;
    margin: 20px 0px 30px 30px;
`



export const DivEcossistema = styled.div `
    margin: 30px 0px 40px 40px;
    display: flex;
    gap: 20px;


    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        padding: 20px 60px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #1A202C;
        text-align: center;
    }

    button {
        height: 25px;
        width: 100px;
        font-size: 14px;
        font-weight: 400;
        color: #1155bb;
        border: 1px solid #1155bb;
        border-radius: 4px;
    }

`

export const ContainerUsuarios = styled.div `
    display: flex;
    align-items: center;
    margin: 40px 0px 60px 30px;


    div {
        display: flex;
        flex-direction: column;
    }

    p:nth-of-type(even) {
        background-color: #f5f5f5;
    }

    p:nth-of-type(odd) {
        border: 1px solid rgba(0, 0, 0, 0.05);
    }
    
`

export const TituloInformacao = styled.p `
    font-size: 11px;
    font-weight: 400;
    color: #1155bb;
    padding: 6px 0px 6px 6px;
    border: 1px solid rgba(0, 0, 0, 0.05);
`

export const Informacoes = styled.p `
   font-size: 12px;
    font-weight: 600;
    color: #666673;
    padding: 6px 0px 6px 6px;
`

export const Detalhes = styled.p `
    font-size: 14px;
    font-weight: 700;
    color: #3182ce;
    padding: 3px 0px 6px 6px;
`

