import { Container, ContainerImagemFundo, ContainerSaudacao, ContainerPesquisarCliente } from "./style"

import imagePesquisa from "../../assets/img/image-pesquisa.png"
import logoPesquisa from "../../assets/img/logo-pesquisa.png"
import { InputPesquisar } from "../../../Components/PesquisaInput/style"
import { ButtonPesquisar } from "../../../Components/BotaoPesquisar/style"

function Pesquisar(bgImage) {
    return(
        <Container>
            <ContainerImagemFundo bgImage={imagePesquisa}>
                <img src={logoPesquisa} alt="logo pesquisa" style={{marginTop: "40px"}}/>

                <ContainerSaudacao>
                    <h2>Olá, <span>Geral</span>. 🤙</h2>
                    <p>Aqui no Núcleo Londrisoft você poderá</p>
                </ContainerSaudacao>

                <ContainerPesquisarCliente>
                    <p>encontrar informações sobre o usuário:</p>
                    <InputPesquisar placeholder="CPF / CNPJ, Nome / Razão Social / E-mail / Id Empresa"></InputPesquisar>
                    <ButtonPesquisar>Pesquisar</ButtonPesquisar>
                </ContainerPesquisarCliente>
            </ContainerImagemFundo>
            
        </Container>
    )
}

export default Pesquisar