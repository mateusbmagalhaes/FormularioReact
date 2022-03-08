import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3"  component="h1" align="center">Formulário Cadastro</Typography>
        <FormularioCadastro enviarForm={submitForm} validarCpf={validaCpf}/>
      </Container>
    );
  }
}

function submitForm(dados) {
  console.log(dados);
}

/*por questões didáticas, vamos criar a função de validação de cpf no App.js,
mas o ideal é que se crie um outro componente de validação*/
function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return {valido:false, texto:"CPF deve ter 11 dígitos"}
  }
  else {
    return {valido:true, texto:""}
  }
}

export default App;
