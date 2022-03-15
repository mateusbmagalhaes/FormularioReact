import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ enviarForm, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState("");

  useEffect( ()=> {
    console.log(dadosColetados);
    if(etapaAtual === etapaAtual.length-1) {
      enviarForm(dadosColetados);
    }
  })

  const Formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais enviarForm={coletarDados} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado Pelo Cadastro!</Typography>
  ];//um array de componentes que substitui o switch case para transitar entre telas

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    Proximo();
  }

  function Proximo() {
    setEtapaAtual(etapaAtual + 1);
  }


  return ( 
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {Formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
