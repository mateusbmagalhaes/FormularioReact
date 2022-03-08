import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ enviarForm, validarCpf }) {
  return (
    <>
      <DadosPessoais enviarForm={enviarForm} validarCpf={validarCpf}/>
      <DadosUsuario/>
    </>
  );
}

export default FormularioCadastro;
