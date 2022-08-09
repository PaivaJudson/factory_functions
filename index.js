function criaPessoa(nome, sobreNome) {
    return {
        nome,
        sobreNome
    };
}

const p1 = criaPessoa('Judson', 'Otavio');
console.log(p1);