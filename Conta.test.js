const Cliente = require('./Cliente');
const Conta = require('./Conta');

test('teste saque valor igual ao saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(100.0);

    expect(contaDoCliente01.saldo).toBe(0.0);
});

test('teste saque valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(200.0);

    expect(contaDoCliente01.saldo).toBe(100.0);
});

test('teste deposito valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(200.0);

    expect(contaDoCliente01.saldo).toBe(200.0);
});

test('teste deposito valor negativo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(-200.0);

    expect(contaDoCliente01.saldo).toBe(0);
});





test('teste de transferência: 50 reais da contaA para a contaB', () => {

    var cliente01 = new Cliente();
    cliente01.nome = 'Zaraki';
    cliente01.cpf = '14265699954';

    var cliente02 = new Cliente();
    cliente02.nome = 'Mikasa';
    cliente02.cpf = '14523699954';

    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1103;
    contaDoCliente01.numero = 2003;
    contaDoCliente01.cliente = cliente01;    

    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;    
    contaDoCliente02.cliente = cliente02;
        
    contaDoCliente01.depositar(50.0);
    contaDoCliente01.transferir(50.0, contaDoCliente02);

    expect(contaDoCliente01.saldo).toEqual(0.0);
    expect(contaDoCliente02.saldo).toEqual(50.0);
})

test('teste de transferência: 50 reais da contaB para a contaA', () => {

    var cliente01 = new Cliente();
    cliente01.nome = 'Zaraki';
    cliente01.cpf = '14265699954';

    var cliente02 = new Cliente();
    cliente02.nome = 'Mikasa';
    cliente02.cpf = '14523699954';

    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1103;
    contaDoCliente01.numero = 2003;
    contaDoCliente01.cliente = cliente01;    

    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;    
    contaDoCliente02.cliente = cliente02;
        
    contaDoCliente02.depositar(50.0);
    contaDoCliente02.transferir(50.0, contaDoCliente01);

    expect(contaDoCliente02.saldo).toEqual(0.0);
    expect(contaDoCliente01.saldo).toEqual(50.0);
})

test('teste de transferência: -100 reais da contaA para a contaB', () => {

    var cliente01 = new Cliente();
    cliente01.nome = 'Zaraki';
    cliente01.cpf = '14265699954';

    var cliente02 = new Cliente();
    cliente02.nome = 'Mikasa';
    cliente02.cpf = '14523699954';

    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1103;
    contaDoCliente01.numero = 2003;
    contaDoCliente01.cliente = cliente01;    

    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;    
    contaDoCliente02.cliente = cliente02;
        
    contaDoCliente01.depositar(100.0);
    contaDoCliente02.depositar(50.0)
    contaDoCliente01.transferir(-100.0, contaDoCliente02);

    expect(contaDoCliente01.saldo).toEqual(100.0);
    expect(contaDoCliente02.saldo).toEqual(50.0); //errado
});

test('teste de transferência: 500 reais da contaB para a contaA', () => {

    var cliente01 = new Cliente();
    cliente01.nome = 'Zaraki';
    cliente01.cpf = '14265699954';

    var cliente02 = new Cliente();
    cliente02.nome = 'Mikasa';
    cliente02.cpf = '14523699954';

    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1103;
    contaDoCliente01.numero = 2003;
    contaDoCliente01.cliente = cliente01;    

    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;    
    contaDoCliente02.cliente = cliente02;
        
    contaDoCliente02.depositar(700.0);
    contaDoCliente02.transferir(500.0, contaDoCliente01);

    expect(contaDoCliente02.saldo).toEqual(200.0);
    expect(contaDoCliente01.saldo).toEqual(500.0);
})

test('teste de transferência: 100 reais da contaA para a própria contaA', () => {

var cliente01 = new Cliente();
cliente01.nome = 'Zaraki';
cliente01.cpf = '14265699954';

var contaDoCliente01 = new Conta();
contaDoCliente01.agencia = 1103;
contaDoCliente01.numero = 2003;
contaDoCliente01.cliente = cliente01;    
        
contaDoCliente01.depositar(100.0);
contaDoCliente01.transferir(100.0, contaDoCliente01);

expect(contaDoCliente01.saldo).toBe(100.0);
})