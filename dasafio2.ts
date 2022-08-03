enum Cargo {
    FrontEnd,
    BackEnd
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Pessoa = {
    nome: 'Carlos',
    idade: 29,
    profissao: Cargo.BackEnd
};

let pessoa2: Pessoa = {
    nome: 'Ben-Hur',
    idade: 30,
    profissao: Cargo.BackEnd
};

let pessoa3: Pessoa = {
    nome: 'Camila',
    idade: 29,
    profissao: Cargo.FrontEnd
};

let pessoa4: Pessoa = {
    nome: "Bruna",
    idade: 24,
    profissao: Cargo.FrontEnd
}
