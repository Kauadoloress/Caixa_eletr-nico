let usuario = prompt("Olá. poderia informa seu nome?");
alert(`Olá ${usuario}, prazer ter você aqui!`);
let saldoUsuario = 210;

function systembanco() {
    let escolha = parseInt(prompt("Qual função deseja ultilizar? 1)Saldo; 2)Extrato; 3)Saque; 4)Depósito; 5)Transferência; 6)Sair"));
    switch (escolha) {
        case 1:
            useSaldo();
            break;

        case 2:
            extrato();
            break;
        case 3:
            saque();
            break;
        case 4:
            deposito();
            break;
        case 5:
            transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            alert("O número informado não existe no sistema");
            systembanco();
    }
}

function useSaldo() {

    let senha = prompt("Digite a senha:");
    if (senha === "3589") {
        alert(`Seu saldo é de R$ ${saldoUsuario}`);

        let continuar = prompt("Voltar ao menu? SIM/NÃO");
        continuar = continuar.toUpperCase();

        if (continuar === "SIM") {
            systembanco();
        } else {
            useSaldo();
        }
    } else {
        alert("Senha incorreta");
        return useSaldo();
    }

}

function extrato() {
    let senha = prompt("Digite a senha:");
    if (senha === "3589") {
        alert(`Padaria da Carlinha = R$20,00\n Centauro = R$500,20\n Balada Tuts Tuts = R$780,00`);
    } else {
        alert("Senha incorreta");
        return useSaldo();
    }
    let continuar = prompt("Voltar ao menu? SIM/NÃO");
    continuar = continuar.toUpperCase();

    if (continuar === "SIM") {
        systembanco();
    } else {
        extrato();
    }

}


function saque() {
    let senha = prompt("Digite a senha:");
    if (senha === "3589") {
        let valorsaque = parseFloat(prompt("Digite o valor do saque:"));

        if (valorsaque > saldoUsuario) {
            alert("Operação não autorizada");
            return saque();
        } else if (valorsaque <= 0) {
            alert("Operação não autorizada");
            return saque();
        } else {
            saldoUsuario -= valorsaque;
            alert(saldoUsuario);
        }
        let continuar = prompt("Voltar ao menu? SIM/NÃO");
        continuar = continuar.toUpperCase();

        if (continuar === "SIM") {
            systembanco();
        } else {
            saque();
        }
    } else {
        alert("Senha incorreta");
        return useSaldo();
    }
}

function deposito() {
    let senha = prompt("Digite a senha:");
    if (senha === "3589") {

        let valordeposito = parseFloat(prompt("Digite o valor do deposito:"));
        if (valordeposito <= 0) {
            alert("Operação não autorizada")
            deposito();
        } else {
            saldoUsuario += valordeposito;

            alert(saldoUsuario);
        }

        let continuar = prompt("Voltar ao menu? SIM/NÃO");
        continuar = continuar.toUpperCase();

        if (continuar === "SIM") {
            systembanco();
        } else {
            deposito();
        }
    } else {
        alert("Senha incorreta");
        return useSaldo();
    }
}

function transferencia() {
    let senha = prompt("Digite a senha:");
    if (senha === "3589") {
        let numerodaconta = parseInt(prompt("Digite o número da conta:"));

        if (isNaN(numerodaconta)) {
            let valortransferencia = parseFloat(prompt("Digite o valor da tranferência:"));
            alert("O número da conta informada não existe!")
            transferencia();

        } else {

            let valortransferencia = parseFloat(prompt("Digite o valor da tranferência:"));
            if (valortransferencia > saldoUsuario) {
                alert("Operação não autorizada")
                transferencia();
            } else if (valortransferencia <= 0) {
                alert("Operação não autorizada")
                transferencia();
            } else {
                saldoUsuario -= valortransferencia
                alert(`O valor transferido foi de R$ ${valortransferencia} para conta ${numerodaconta}`)
            }
            let continuar = prompt("Voltar ao menu? SIM/NÃO");
            continuar = continuar.toUpperCase();

            if (continuar === "SIM") {
                systembanco();
            } else {
                transferencia();
            }
        }


    } else {
        alert("Senha incorreta");
        return transferencia();
    }

}

function sair(){
    let sairsystem = parseInt(prompt("Você deseja sair? 1)SIM/2)NÃO"));

    switch(sairsystem){
        case 1:
            alert(`${usuario}, foi um prazer ter você por aqui!`);
            window.opener.close()
        case 2:
            systembanco();
    }

}


systembanco();
