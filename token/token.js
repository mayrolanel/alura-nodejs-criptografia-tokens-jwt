import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
    {
        apelido: "jm",
        curso: "sugurança e nodeJs"
    }, chaveSecreta
);

console.log('jwt: ', token)

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log('jwt decodificado: ', tokenDecodificado)