import { Container, ContainerImagemFundo } from "./style"

import imagePesquisa from "../../assets/img/image-pesquisa.png"

function Pesquisar() {
    return(
        <Container>
            <ContainerImagemFundo>
                <img src={imagePesquisa} alt="" />
            </ContainerImagemFundo>
        </Container>
    )
}

export default Pesquisar