import { Container, Sugestao, ContainerEsquerda, ContainerLogo, ContainerInput, Input, Button } from "./style"

import imageComp from "../../assets/img/image-comp.png"
import logo from "../../assets/img/logo.png"


function Home() {

  return (
    <Container>

      <Sugestao>
        <a href="https://feedback.userreport.com/7275e80b-0459-4d2a-94d1-05c79f73478a/#ideas/popular" target='blank'>Deixe sua sugestão</a>
      </Sugestao>
      <ContainerEsquerda>
        <img src={imageComp} alt="logo do londrisoft" />
      </ContainerEsquerda>

      <ContainerLogo>
        < img src={logo} alt="logo do londrisoft" />
        <ContainerInput>
          <label htmlFor="email">E-mail</label>
          <Input type='email' placeholder='email@provider.com'></Input>
        </ContainerInput>

        <ContainerInput>
          <label htmlFor="senha">Senha</label>
          <Input type='password' placeholder='********'></Input>
        </ContainerInput>
        <Button>Acessar</Button>
      </ContainerLogo>
      
    </Container>

  )
}

export default Home
