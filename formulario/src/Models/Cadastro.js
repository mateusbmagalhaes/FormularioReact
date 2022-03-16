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

  /*por questões didáticas, vamos criar a função de validação de cpf no App.js,
mas o ideal é que se crie um outro componente de validação*/
function validaSenha(Senha) {
    if (Senha.length < 4 || Senha.length > 72) {
      return {valido:false, texto:"Senha deve ter entre 4 e 72 dígitos"}
    }
    else {
      return {valido:true, texto:""}
    }
  }

  export { validaCpf, validaSenha };