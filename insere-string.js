/*
* Na necessidade de inserir um char em uma string, usar esse algoritimo como base
*/

let base = 2250;
let newString = base.toString();

// Converte new string para um array

newString = newString.split("");

// Agora se insere na posição que deseja

newString = newString.splice(2, 0, ',');

// Agora retorna o array para um string

newString = newString.join('');