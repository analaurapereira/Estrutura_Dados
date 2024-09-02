function HashTable() {
    var table = []; // Array para armazenar os elementos da tabela hash

    // Definição do par chave-valor para ser armazenado na tabela hash
    var ValuePair = function(key, value) {
        this.key = key; // Chave do par chave-valor
        this.value = value; // Valor associado à chave
        this.next = null; // Referência para o próximo elemento na lista encadeada (para tratamento de colisões)
    };

    // Função de hashing fraca baseada na soma dos códigos ASCII dos caracteres
    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37; // Retorna o valor do hash limitado ao tamanho da tabela hash
        //LE -> (76+69)/37 e pega o resto
    };

    // Método para inserir um par chave-valor na tabela hash
    this.put = function(key, value) {
    var position = loseloseHashCode(key); // Calcula a posição na tabela hash usando a função de hashing

    if (table[position] === undefined) { // Se a posição na tabela hash estiver vazia
        table[position] = new ValuePair(key, value); // Cria um novo par chave-valor nessa posição
    } 
    
    else {
        var current = table[position]; // Inicia a busca pelo elemento na posição
        while (current.next !== null && current.key !== key) { // Percorre a lista encadeada até encontrar o último elemento ou a chave
            current = current.next;
        }

        if (current.key === key) { // Se a chave já existe na lista encadeada
            current.value = value; // Atualiza o valor associado à chave
        } 
        
        else {
            current.next = new ValuePair(key, value); // Adiciona um novo par chave-valor ao final da lista encadeada
        }
    }
};
    // Método para remover um elemento da tabela hash com base na chave
    this.remove = function(key) {
        var position = loseloseHashCode(key); // Calcula a posição na tabela hash usando a função de hashing

        if (table[position] !== undefined) { // Verifica se há um elemento na posição calculada

            var current = table[position]; // Inicia a busca pelo elemento na posição
            while (current !== null && current.key !== key) { // Percorre a lista encadeada até encontrar a chave ou o final da lista
                current = current.next;
            }

            if (current !== null) { // Se a chave for encontrada na lista encadeada
                current.value = undefined; // Define o valor associado à chave como indefinido
            }
        }
    };

    // Método para obter o valor associado a uma chave na tabela hash
    this.get = function(key) {
        var position = loseloseHashCode(key); // Calcula a posição na tabela hash usando a função de hashing
        if (table[position] !== undefined) { // Verifica se há um elemento na posição calculada

            var current = table[position]; // Inicia a busca pelo elemento na posição

            while (current !== null) { // Percorre a lista encadeada até encontrar a chave ou o final da lista
                if (current.key === key) { // Se a chave for encontrada na lista encadeada
                    return current.value; // Retorna o valor associado à chave
                }

                current = current.next;
            }
        }

        return undefined; // Se a chave não for encontrada, retorna indefinido
    };

    // Método para imprimir a tabela hash
    this.print = function() {
        for (var i = 0; i < table.length; i++) { // Percorre todo o array da tabela hash
            if (table[i] !== undefined) { // Se houver um elemento na posição atual

                var current = table[i]; // Inicia a busca pelo elemento na posição

                while (current !== null) { // Percorre a lista encadeada
                    console.log(i + ' : ' + current.key + ' - ' + current.value); // Imprime o índice da tabela, a chave e o valor associado
                    current = current.next;
                }
            }
        }
    };

    // Método para obter o tamanho da tabela hash
    this.size = function() {
        var count = 0;
        for (var i = 0; i < table.length; i++) { // Percorre todo o array da tabela hash
            if (table[i] !== undefined) { // Se houver um elemento na posição atual

                var current = table[i]; // Inicia a busca pelo elemento na posição

                while (current !== null) { // Percorre a lista encadeada
                    count++; // Aumenta o contador
                    current = current.next;
                }
            }
        }
        return count; // Retorna o tamanho total da tabela hash
    };
}

// Exemplo de uso da classe HashTable
var hashtable = new HashTable();

// Inserindo alguns pares chave-valor na tabela hash
hashtable.put("João", "joão@gmail.com");
hashtable.put("Carlos", "carlos@gmail.com");
hashtable.put("Joana", "joana@gmail.com");
hashtable.put("Carlos", "carlosEdu@gmail.com"); // Substitui o valor anterior para a chave "Carlos"

hashtable.print(); // Imprime os elementos da tabela hash

console.log("Tamanho da tabela hash:", hashtable.size()); // Imprime o tamanho da tabela hash