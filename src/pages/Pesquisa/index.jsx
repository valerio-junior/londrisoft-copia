import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { Container, ContainerImagemFundo, ContainerSaudacao, ContainerPesquisarCliente, Footer, LinkSair, InputWrapper, BotaoLimpar } from "./style"

import imagePesquisa from "../../assets/img/image-pesquisa.png"
import logoPesquisa from "../../assets/img/logo-pesquisa.png"

import InputPesquisa from "../../../Components/PesquisaInput"
import ButtonPesquisa from "../../../Components/BotaoPesquisar"

import BotaoSugestao from '../../../Components/LinkSugestao'

function Pesquisar() {
    const navigate = useNavigate()

    const [termoPesquisa, setTermoPesquisa] = useState("");

    const limparInput = () => {
        setTermoPesquisa("");
    };

    const botaoDesativado = termoPesquisa.trim() === "";

    return(
        <Container>
            <BotaoSugestao>
                <a href="https://feedback.userreport.com/7275e80b-0459-4d2a-94d1-05c79f73478a/#ideas/popular" target='blank'>Deixe sua sugestão</a>
            </BotaoSugestao>
            <ContainerImagemFundo bgImage={imagePesquisa}>
                <img src={logoPesquisa} alt="logo pesquisa" style={{marginTop: "40px"}}/>

                <ContainerSaudacao>
                    <h2>Olá, <span>Geral</span>. 🤙</h2>
                    <p>Aqui no Núcleo Londrisoft você poderá</p>
                </ContainerSaudacao>

                <ContainerPesquisarCliente>
                    <p>encontrar informações sobre o usuário:</p>

                    {/* Elemento posicional para alinhar o X */}
                    <InputWrapper>
                     <InputPesquisa placeholder="CPF / CNPJ, Nome / Razão Social / E-mail / Id Empresa" value={termoPesquisa}
                     onChange={(e) => setTermoPesquisa(e.target.value)}></InputPesquisa>
                     {!botaoDesativado && (
                        <BotaoLimpar onClick={limparInput}>✕</BotaoLimpar>
                        )}
                    </InputWrapper>
                    <ButtonPesquisa disabled={botaoDesativado} onClick={() => navigate("/details")}>Pesquisar</ButtonPesquisa>
                </ContainerPesquisarCliente>
            </ContainerImagemFundo>

            <Footer>
                <LinkSair to= "/">Sair da conta</LinkSair>
            </Footer>
            
        </Container>
    )
}

export default Pesquisar