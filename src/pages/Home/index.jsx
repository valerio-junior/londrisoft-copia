import { Container, ContainerEsquerda, ContainerDireita, ContainerInput, Input, Button,Form } from "./style"

import  BotaoSugestao from '../../../Components/LinkSugestao';

import imageComp from "../../assets/img/image-comp.png"
import logo from "../../assets/img/logo.png"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const [tentouEnviar, setTentouEnviar] = useState(false);

  const navigate = useNavigate();

  const validarCampos = (emailAtual, senhaAtual) => {
    let temErro = false;

    // Validação do E-mail
    if (!emailAtual.trim()) {
      setErroEmail('E-mail obrigatório');
      temErro = true;
    } else if (!emailAtual.includes('@')) {
      setErroEmail('E-mail inválido');
      temErro = true;
    } else {
      setErroEmail(''); // Limpa o erro se estiver tudo certo
    }

    // Validação da Senha
    if (!senhaAtual.trim()) {
      setErroSenha('Senha obrigatória');
      temErro = true;
    } else {
      setErroSenha(''); // Limpa o erro se estiver tudo certo
    }

    return !temErro; // Retorna true se NÃO houver nenhum erro
  };

  // 4. Função que roda a cada letra digitada no E-mail
  const handleEmailChange = (e) => {
    const valor = e.target.value;
    setEmail(valor);
    
    // Se ele já tentou enviar uma vez, valida em tempo real enquanto digita
    if (tentouEnviar) {
      validarCampos(valor, senha);
    }
  };

  // 5. Função que roda a cada letra digitada na Senha
  const handleSenhaChange = (e) => {
    const valor = e.target.value;
    setSenha(valor);
    
    // Se ele já tentou enviar uma vez, valida em tempo real enquanto digita
    if (tentouEnviar) {
      validarCampos(email, valor);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Ativa a validação em tempo real para as próximas digitações
    setTentouEnviar(true);

    // Dispara a validação no momento do clique
    const formularioValido = validarCampos(email, senha);

    if (formularioValido) {
      console.log('Campos validados com sucesso! Entrando...');
      navigate('/geral'); 
    }
  };


  return (
    <Container>
      
      <BotaoSugestao>
        <a href="https://feedback.userreport.com/7275e80b-0459-4d2a-94d1-05c79f73478a/#ideas/popular" target='blank'>Deixe sua sugestão</a>
      </BotaoSugestao>
      <ContainerEsquerda>
        <img src={imageComp} alt="logo do londrisoft" />
      </ContainerEsquerda>

      <ContainerDireita>
        < img src={logo} alt="logo do londrisoft" />
        <Form onSubmit={handleLogin}>
          <ContainerInput>
            <label htmlFor="email">E-mail</label>
            <Input type='text' placeholder='email@provider.com' value={email} onChange={handleEmailChange} hasError={!!erroEmail}>

            </Input>
            {/* Exibe o erro do email logo abaixo do input */}
            {erroEmail && <span>{erroEmail}</span>}
          </ContainerInput>
          <ContainerInput>
            <label htmlFor="senha">Senha</label>
            <Input type='password' placeholder='********' value={senha} onChange={handleSenhaChange} hasError={!!erroSenha}></Input>
            {/* Exibe o erro da senha logo abaixo do input */}
            {erroSenha && <span>{erroSenha}</span>}
          </ContainerInput>
          <Button type="submit">Acessar</Button>

        </Form>
      </ContainerDireita>

    </Container>

  )
}

export default Home
