import { Container, Sugestao, ContainerEsquerda, ContainerDireita, ContainerInput, Input, Button,Form } from "./style"

import imageComp from "../../assets/img/image-comp.png"
import logo from "../../assets/img/logo.png"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !senha.trim()) {
      setErro('Por favor, preencha todos os campos!');
      return; // Para a execução aqui e não deixa avançar
    }

    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido (deve conter "@").');
      return; // Para a execução aqui
    }

    // Se passou pelas duas validações acima, limpa o erro e limpa os campos
    setErro('');

    //redireciona para a próxima página do projeto
    console.log('Campos validados com sucesso! Entrando...');
    navigate('/details'); // Rota da pagina
  };

  return (
    <Container>
      
      <Sugestao>
        <a href="https://feedback.userreport.com/7275e80b-0459-4d2a-94d1-05c79f73478a/#ideas/popular" target='blank'>Deixe sua sugestão</a>
      </Sugestao>
      <ContainerEsquerda>
        <img src={imageComp} alt="logo do londrisoft" />
      </ContainerEsquerda>

      <ContainerDireita>
        < img src={logo} alt="logo do londrisoft" />
        <Form onSubmit={handleLogin}>
          <ContainerInput>
            <label htmlFor="email">E-mail</label>
            <Input type='text' placeholder='email@provider.com' value={email} onChange={(e) => setEmail(e.target.value)}>

            </Input>
          </ContainerInput>
          <ContainerInput>
            <label htmlFor="senha">Senha</label>
            <Input type='password' placeholder='********' value={senha} onChange={(e) => setSenha(e.target.value)}></Input>
          </ContainerInput>
          <Button type="submit">Acessar</Button>

        </Form>

        {/* 4. Exibe a mensagem de erro na tela apenas se o estado 'erro' não estiver vazio */}
      {erro && (
        <p style={{ color: '#ff3333', fontWeight: 'bold', marginBottom: '15px' }}>
          {erro}
        </p>
      )}
      </ContainerDireita>

    </Container>

  )
}

export default Home
