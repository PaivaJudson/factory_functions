function criaPessoa(nome, sobreNome, altura, peso) {
    return {
        nome,
        sobreNome,

        fala: function(assunto) {
            return `${this.nome} está falando ${assunto}`
        },
        altura: altura,
        peso: peso,
        get imc() {
            const i = this.peso / (this.altura ** 2);
            return i.toFixed(2);
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ');
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        }
    };
}


const p1 = criaPessoa('Judson', 'Paiva', 1.8, 80);
p1.nomeCompleto = "Leonor Barbas Sebastião José Paiva";
console.log(p1.fala('sobre JS'), '\ncálculo do IMC = ' + p1.imc);
console.log('Nome Completo: ' + p1.nomeCompleto);