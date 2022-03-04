import React from "react";

import {
  Button,
  FormControlLabel,
  TextField,
  Checkbox,
  Switch,
} from "@material-ui/core";
import { blue, green, pink } from "@material-ui/core/colors";

function FormularioCadastro() {
  return (
    <form color="primary">
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch defaultChecked color="primary" />}
      />
      <FormControlLabel label="Novidade" control={<Switch color="primary" />} />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
