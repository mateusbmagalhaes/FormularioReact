import { Button, TextField} from '@material-ui/core';
import React from 'react';

function DadosUsuario() {

    return (
        <form>
            <TextField id="email" label="e-mail" type="email" />
            <TextField id="senha" label="senha" type="password"/>
            <Button type='submit' variant='contained' color='primary'> Cadastrar </Button>
        </form>
    );

}

export default DadosUsuario;