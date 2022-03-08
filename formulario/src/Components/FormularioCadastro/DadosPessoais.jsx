import React, { useState } from "react";

import { Button, FormControlLabel, TextField, Switch } from "@material-ui/core";

function DadosPessoais({ enviarForm, validarCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setsobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      color="primary"
      onSubmit={(event) => {
        event.preventDefault();
        enviarForm({ nome, sobrenome, cpf, promocoes, novidades });
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
        onBlur={(event) => {
          const isvalido = validarCpf(cpf);
          setErros({ cpf: isvalido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
