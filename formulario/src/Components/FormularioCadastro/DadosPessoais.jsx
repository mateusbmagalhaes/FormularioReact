import React, { useState, useContext } from "react";
import { Button, FormControlLabel, TextField, Switch } from "@material-ui/core";
import validacoesCadastro from "../../Context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function DadosPessoais({ enviarForm }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setsobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(validacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);  

  return (
    <form
      color="primary"
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          enviarForm({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          //exemplo de limitar numero de caracteres em um input
          /*let tempNome = event.target.value; 
          if (tempNome.length >= 12) {
            tempNome = tempNome.substr(0, 10);
          }
          setNome(tempNome);*/
          setNome(event.target.value);
        }}
        id="name"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setsobrenome(event.target.value);
        }}
        id="lastname"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            //defaultChecked={promocoes}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidade"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            //defaultChecked={novidades}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
