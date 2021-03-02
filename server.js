const env = require('./src/config/env');

function uploadFile(){
    console.log('Realizando o upload do arquivo');
    console.log(env.aws.access_key);
}

uploadFile();