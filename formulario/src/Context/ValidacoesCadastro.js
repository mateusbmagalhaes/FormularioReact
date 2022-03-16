import React from 'react';

const validacoesCadasrto = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});

function semValidacao(dados) {
    return {valido: true, texto: ""}
}

export default validacoesCadasrto;