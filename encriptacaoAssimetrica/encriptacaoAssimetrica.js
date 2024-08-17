import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        }
});

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
);

console.log('dados cifrados: ', dadosCriptografados.toString('hex'));

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
);

console.log('dados decifrados: ', dadosDecifrados.toString('utf-8'));
