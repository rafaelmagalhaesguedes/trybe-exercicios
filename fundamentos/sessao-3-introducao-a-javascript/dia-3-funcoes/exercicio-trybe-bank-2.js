
/* 
    Agora iremos escrever uma função chamada addCustomers que irá adicionar um 
    array de novas pessoas clientes ao nosso array trybeBankCustomers.
    Certifique-se de que somente sejam adicionados ao array trybeBankCustomers 
    valores do tipo string. Caso o parâmetro não seja do tipo string, imprimir 
    a mensagem: “Todos os valores precisam ser strings.”. 
*/

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers (array, customer) {
    
    let message = '';

    for ( let i = 0; i < customer.length; i += 1 ) {
        
        if(typeof customer[i] === 'string') {
            customer.push(array[i]);
            message = 'Adicionado com sucesso!';
            return message;
        }
        else{
            message = 'Todos os valores precisam ser strings.'
            return message;
        }
    }
}

console.log(addCustomers(trybeBankCustomers, ['Rafael', 'Lorena']));
