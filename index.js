// Importando o módulo realine-sync
const readlineSync = require("readline-sync");

//Array para armazenar as propriedades
let listaProp = [];

console.log('Coloque uma propriedade CSS ou escreva SAIR quando nao quiser mais continuar!');

while(true){

    //armazenando a resposta do usuário
    const propCSS = readlineSync.question('Digite a propriedade CSS!');

    if(propCSS == ''){

        console.log('Preencha o campo por favor');
     
     } else if (propCSS !='' && propCSS != 'sair'){

        listaProp.push(propCSS);
         continue;

     } else if (propCSS == 'sair'){

        //array em ordem alfabética
        console.log(listaProp.sort());

        console.log('Tchau, Volte quando quiser!');
        break;
     }
}