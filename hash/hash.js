import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

class Usuario{
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.hash === criaHash(senha)) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        }

        console.log('Usuário ou senha incorretos!');
        return false;
    }
}

const usuario = new Usuario('maria', '123456')
console.log(usuario);
usuario.autentica('maria', '123457');