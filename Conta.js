class Conta{    
    agencia;
    numero;
    cliente;
    _saldo = 0.0;

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        
       if(this._saldo >= valor){
            if(valor > this._saldo || valor <= 0){
                return console.log("\n Saque não autorizado!");
            }
            this._saldo = this._saldo - valor;
            return console.log("\n Conta: ", conta.numero, "\n Valor do saque: ", valor ,"\n Saldo atual: ", conta._saldo);
        }
        else{
            return console.log("\n Saque não autorizado!");
        }        
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, contaDestino){
        if(this._saldo >= valor){
            if(valor > this._saldo || valor <= 0){
                return;
            }
            this._saldo = this._saldo - valor;
            contaDestino.depositar(valor);
        }
        else{
            if(valor > this.saldo || valor <= 0){
                return;
            }
        }
    }
}

module.exports = Conta;