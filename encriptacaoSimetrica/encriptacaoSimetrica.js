import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = 'Demonstracao do curso';
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

const decifra = createDecipheriv('aes256', chave, vi);
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log('mensagem cifrada: ', mensagemCifrada);
console.log('mensagem decifrada: ', mensagemDecifrada);
