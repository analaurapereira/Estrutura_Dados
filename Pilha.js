// Definição do nó da lista encadeada
class No {
    constructor(dado) {
        this.dado = dado; // O dado armazenado no nó
        this.proximo = null; // Referência para o próximo nó na lista encadeada
    }
}

// Implementação da Pilha usando lista encadeada
class Pilha {
    constructor() {
        this.topo = null; // Topo da pilha
        this.length = 0; // Tamanho da pilha
    }

    // Insere um elemento no topo da pilha
    push(elemento) {
        const novoNo = new No(elemento); // Cria um novo nó com o elemento fornecido
        novoNo.proximo = this.topo; // O próximo do novo nó será o nó que está no topo atualmente
        this.topo = novoNo; // O novo nó se torna o novo topo da pilha
        this.length++; // Aumenta o tamanho da pilha
    }

    // Remove e retorna o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) { // Se estiver vazia, retorna nulo
            return null;
        }

        const noRemovido = this.topo; // Armazena o nó a ser removido (o nó no topo da pilha)
        this.topo = this.topo.proximo; // Atualiza o topo da pilha para o próximo nó
        this.length--; // Diminui o tamanho da pilha
        return noRemovido.dado; // Retorna o dado do nó removido
    }

    // Retorna o elemento no topo da pilha sem removê-lo
    peek() {
        if (this.isEmpty()) {   // Se estiver vazia, retorna nulo
            return null;
        }
        
        return this.topo.dado;  // Retorna o dado do nó no início da fila
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.length === 0;
    }

    // Retorna o número de elementos na pilha
    size() {
        return this.length;
    }
}

// Exemplo de uso da Pilha
const p1 = new Pilha(); // Cria uma nova pilha

// Adiciona elementos à pilha
p1.push(1);
p1.push(2);
p1.push(3);

// Mostra o tamanho da pilha
console.log("Tamanho da pilha: ", p1.size()); // Saída: Tamanho da pilha: 3
// Mostra o elemento no topo da pilha
console.log("Elemento no topo da pilha: ", p1.peek()); // Saída: Elemento no topo da pilha: 3
// Remove o elemento do topo da pilha
console.log("Removendo elemento do topo da pilha: ", p1.pop()); // Saída: Removendo elemento do topo da pilha: 3
// Mostra o novo tamanho da pilha após a remoção
console.log("Tamanho da pilha após remoção: ", p1.size()); // Saída: Tamanho da pilha após remoção: 2
// Mostra o novo elemento no topo da pilha após a remoção
console.log("Novo elemento no topo da pilha: ", p1.peek()); // Saída: Novo elemento no topo da pilha: 2