import {
  Nav,
  Container,
  Input,
  DivImagemFoguete,
  ContainerInfoBasica,
  AreaInformacao,
  AreaButton,
  ButtonGrupo,
  IdEmpresaDescricao,
  IdEmpresaNumero,
  CnpjDescricao,
  CnpjNumero,
  StatusFinanceiroDescricao,
  ButtonStatusFinanceiro,
  ContainerDataCadastroAlteracao,
  DataCadastroAlteracao,
  ContainerDadosEmpresa,
  ContainerDadosEmpresaEsquerda,
  ContainerDadosEmpresaDireita,
  ContainerDadosEmpresaDireitaInterno,
  DescricaoCamposObrigatorios,
  DivEcossistema,
  ContainerUsuarios,
  TituloInformacao,
  Informacoes,
  Detalhes
} from "./style";

import InputDadosEmpresa from "../../../Components/InputDados/index";
import LabelDadosEmpresa from "../../../Components/LabelDados/index";
import TituloDivisaoSessao from "../../../Components/DivisaoSessoes/index"
import { Sugestao } from '../../../Components/LinkSugestao/style'

import logo from "../../assets/img/logo.png";
import imageG from "../../assets/img/image-g.png";
import imageFoguete from "../../assets/img/image-aviao.png";
import { Children } from 'react';

function Info() {
  return (
    <Container>
      <Sugestao>
              <a href="https://feedback.userreport.com/7275e80b-0459-4d2a-94d1-05c79f73478a/#ideas/popular" target='blank'>Deixe sua sugestão</a>
            </Sugestao>
      <Nav>
        <div>
          <img src={logo} alt="logo londrisoft" />
        </div>
        <div>
          <Input placeholder="CPF / CNPJ, Nome / Razão Social / E-mail / Id Empresa"></Input>
          <button>Pesquisar</button>
        </div>
        <div style={{ cursor: "pointer" }}>
          <img src={imageG} alt="imagem g" />
          <p>
            Geral <span>⌵</span>
          </p>
        </div>
      </Nav>

      <DivImagemFoguete>
        <img src={imageFoguete} alt="imagem aviao" />
      </DivImagemFoguete>

      <ContainerInfoBasica>
        <AreaButton>
          <ButtonGrupo>Grupos econômicos</ButtonGrupo>
        </AreaButton>

        <AreaInformacao>
          <div>
            <IdEmpresaDescricao>ID Empresa</IdEmpresaDescricao>
            <IdEmpresaNumero tabIndex={0}>5582</IdEmpresaNumero>
          </div>
          <div>
            <CnpjDescricao>CPF/CNPJ</CnpjDescricao>
            <CnpjNumero tabIndex={0}>11456014000132</CnpjNumero>
          </div>
          <div>
            <StatusFinanceiroDescricao>
              Status Financeiro
            </StatusFinanceiroDescricao>
            <ButtonStatusFinanceiro>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2.8"
                viewBox="0 0 32 20"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="30" height="18" rx="9" ry="9"></rect>
                <circle cx="21" cy="10" r="4.5" fill="currentColor"></circle>
              </svg>
              Normal
            </ButtonStatusFinanceiro>
          </div>
        </AreaInformacao>
      </ContainerInfoBasica>

      <TituloDivisaoSessao>Dados da Empresa</TituloDivisaoSessao>
      <ContainerDataCadastroAlteracao>
        <DataCadastroAlteracao>
          Data de Cadastro 11/03/2026 | Data de Alteração: 11/03/2026
        </DataCadastroAlteracao>
      </ContainerDataCadastroAlteracao>

      <ContainerDadosEmpresa>
        <ContainerDadosEmpresaEsquerda>
          <div>
            <LabelDadosEmpresa>Nome / Razão Social *</LabelDadosEmpresa>
            <InputDadosEmpresa value="GSC OTICA LTDA"></InputDadosEmpresa>
          </div>
          <div>
            <LabelDadosEmpresa>
              Nome do Responsável (Contrato) *
            </LabelDadosEmpresa>
            <InputDadosEmpresa value="Valerio"></InputDadosEmpresa>
          </div>
          <div>
            <LabelDadosEmpresa>Endereço *</LabelDadosEmpresa>
            <InputDadosEmpresa value="Rua do pinhao"></InputDadosEmpresa>
          </div>
          <div>
            <LabelDadosEmpresa>Bairro *</LabelDadosEmpresa>
            <InputDadosEmpresa value="Jardim Monte Cristo"></InputDadosEmpresa>
          </div>
        </ContainerDadosEmpresaEsquerda>

        <ContainerDadosEmpresaDireita>
          <div>
            <LabelDadosEmpresa>E-mail *</LabelDadosEmpresa>
            <InputDadosEmpresa
              style={{ color: "#8f8f8f", cursor: "not-allowed", marginLeft: "10px" }}
              value="valerinjunior.marcos@gmail.com"
            ></InputDadosEmpresa>
          </div>

          <ContainerDadosEmpresaDireitaInterno>
            <div>
              <LabelDadosEmpresa>Telefone *</LabelDadosEmpresa>
              <InputDadosEmpresa value="4333388455"></InputDadosEmpresa>
            </div>
            <div>
              <LabelDadosEmpresa>Adequação de Plano *</LabelDadosEmpresa>
              <InputDadosEmpresa
                style={{ color: "#8f8f8f", cursor: "not-allowed" }}
                value="Plano contratado"
              ></InputDadosEmpresa>
            </div>
          </ContainerDadosEmpresaDireitaInterno>

          <ContainerDadosEmpresaDireitaInterno>
            <div>
              <LabelDadosEmpresa>Número *</LabelDadosEmpresa>
              <InputDadosEmpresa value="56"></InputDadosEmpresa>
            </div>
            <div>
              <LabelDadosEmpresa>CEP *</LabelDadosEmpresa>
              <InputDadosEmpresa
                value="86035623"
              ></InputDadosEmpresa>
            </div>
          </ContainerDadosEmpresaDireitaInterno>
          <ContainerDadosEmpresaDireitaInterno>
            <div>
              <LabelDadosEmpresa>Cidade / Município *</LabelDadosEmpresa>
              <InputDadosEmpresa value="Londrina"></InputDadosEmpresa>
            </div>
            <div>
              <LabelDadosEmpresa>Estado *</LabelDadosEmpresa>
              <InputDadosEmpresa
                style={{ color: "#8f8f8f", cursor: "not-allowed" }}
                value="PR"
              ></InputDadosEmpresa>
            </div>
          </ContainerDadosEmpresaDireitaInterno>
        </ContainerDadosEmpresaDireita>
      </ContainerDadosEmpresa>
      <DescricaoCamposObrigatorios>Campos Obrigatórios(*)</DescricaoCamposObrigatorios>

      <TituloDivisaoSessao>Ecossistema Londrisoft</TituloDivisaoSessao>

      <DivEcossistema>
        <div>
          <p>Simplaz</p>
          <button>Ver detalhes</button>
        </div>
        <div>
          <p>Gestor | Plano básico</p>
          <button>Ver detalhes</button>
        </div>
         <div>
          <p>Certificado Digital</p>
          <p style={{color:"red"}}>Vencimento 24/04/2027</p>
        </div>
      </DivEcossistema>

      <TituloDivisaoSessao>Usuários</TituloDivisaoSessao>

      <ContainerUsuarios>
        <div style={{width: "250px"}}>
          <TituloInformacao>Nome</TituloInformacao>
          <Informacoes>VALERIO</Informacoes>
          <Informacoes>THALLYTA</Informacoes>
          <Informacoes>DANIEL</Informacoes>
        </div>
        <div  style={{width: "300px"}}>
          <TituloInformacao>E-Mail</TituloInformacao>
          <Informacoes>valerinjunior.marcos@gmail.com</Informacoes>
          <Informacoes>thalyzinha2014@gmail.com</Informacoes>
          <Informacoes>danizinvidaloca@gmail.com</Informacoes>
        </div>
        <div style={{width: "250px"}}>
          <TituloInformacao>Status</TituloInformacao>
          <Informacoes>Ativo</Informacoes>
          <Informacoes>Ativo</Informacoes>
          <Informacoes>Ativo</Informacoes>
        </div>
        <div style={{width: "250px"}}>
          <TituloInformacao>Telefone</TituloInformacao>
          <Informacoes>43984424312</Informacoes>
          <Informacoes>43998321321</Informacoes>
          <Informacoes>43999991929</Informacoes>
        </div>
        <div style={{width: "250px"}}>
          <TituloInformacao>Ação</TituloInformacao>
          <Detalhes>Detalhes</Detalhes>
          <Detalhes>Detalhes</Detalhes>
          <Detalhes>Detalhes</Detalhes>
        </div>

      </ContainerUsuarios>
    </Container>
  );
}

export default Info;
