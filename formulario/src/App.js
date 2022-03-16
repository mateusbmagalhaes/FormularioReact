import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";
import {validaCpf, validaSenha} from "./Models/Cadastro";
import ValidacoesCadasrto from "./Context/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário Cadastro
        </Typography>
        <ValidacoesCadasrto.Provider
          value={{ cpf: validaCpf, senha: validaSenha }}
        >
          <FormularioCadastro enviarForm={submitForm} />
        </ValidacoesCadasrto.Provider>
      </Container>
    );
  }
}

function submitForm(dados) {
  console.log(dados);
}

export default App;
