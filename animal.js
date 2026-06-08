 const animal = {
    nome: "Thor", //string
    especie: "Cachorro",
    idade: 4, // number
    tutor: false, // boolean
    vacinado: true
};

//console.log(animal);
console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 6;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com a idade ${animal.idade}, com a vacinação em dia (${animal.vacinado}.`);