const cryptoJS = require('crypto-js')
require('../config/config');

const encrypt = async function(plaintext){
    let ciphertext;
    ciphertext = cryptoJS.AES.encrypt(plaintext.toString(),CONFIG.secretKey).toString();
    return ciphertext;
}
 module.exports.encrypt = encrypt

 const decrypt = async function(ciphertext){
    let plaintext;
    const bytes= cryptoJS.AES.decrypt(ciphertext.toString(),CONFIG.secretKey)
    plaintext = bytes.toString(CryptoJS.enc.Utf8)
    return plaintext;
 };

 module.exports.decrypt = decrypt