function placar(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    if (saldoVitorias < 10) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Ferro.`);
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Bronze.`);
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Prata.`);
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Ouro.`);
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Diamante.`);
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Lendário.`);
    } else {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no ranking Imortal.`);
    }
}

let vitorias = 12;
let derrotas = 5;

placar(vitorias, derrotas);


