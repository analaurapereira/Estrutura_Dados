// Definição do nó da lista encadeada
class No {
    constructor(dado) {
        this.dado = dado; // O dado armazenado no nó
        this.proximo = null; // Referência para o próximo nó na lista encadeada
    }
}

// Implementação da Fila usando lista encadeada
class Fila {
    constructor() {
        this.inicio = null; // Início da fila
        this.fim = null; // Fim da fila
        this.length = 0; // Tamanho da fila
    }

    // Adiciona um elemento ao final da fila
    enqueue(elemento) {
        const novoNo = new No(elemento); // Cria um novo nó com o elemento fornecido

        if (this.isEmpty()) {   // Verifica se a fila está vazia
            this.inicio = novoNo;  // Se estiver vazia, o novo nó será tanto o início quanto o fim da fila
            this.fim = novoNo;
        } 
        
        else {
            this.fim.proximo = novoNo; // Se não estiver vazia, o próximo do nó final atual aponta para o novo nó
            this.fim = novoNo; // O novo nó se torna o novo nó final
        }
        
        this.length++; // Aumenta o tamanho da fila
    }

    // Remove e retorna o elemento do início da fila
    dequeue() {
        if (this.isEmpty()) {   // Se estiver vazia, retorna nulo
            return null;
        }
        
        const noRemovido = this.inicio;  // Armazena o nó a ser removido (o nó no início da fila)
        this.inicio = this.inicio.proximo;  // Atualiza o início da fila para o próximo nó

        if (!this.inicio) {  // Se o início é nulo, significa que a fila ficou vazia
            this.fim = null;  // Nesse caso, o fim é nulo
        }

        this.length--;   // Diminui o tamanho da fila
        return noRemovido.dado;  // Retorna o dado do nó removido
    }

    // Retorna o primeiro elemento da fila sem removê-lo
    front() {
        if (this.isEmpty()) {   // Se estiver vazia, retorna nulo
            return null;
        }
        
        return this.inicio.dado;  // Retorna o dado do nó no início da fila
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.length === 0;  // Retorna verdadeiro se o tamanho da fila for zero
    }

    // Retorna o tamanho da fila
    size() {
        return this.length;  // Retorna o tamanho atual da fila
    }
}

// Exemplo de uso da classe Fila
const f1= new Fila(); // Cria uma nova fila

// Adiciona elementos à fila
f1.enqueue(1);
f1.enqueue(2);
f1.enqueue(3);

// Mostra o tamanho da fila
console.log("Tamanho da fila: ", f1.size()); // Saída: Tamanho da fila: 3
// Mostra o primeiro elemento da fila
console.log("Elemento do início da fila: ", f1.front()); // Saída: Primeiro elemento da fila: 1
// Remove o primeiro elemento da fila
console.log("Removendo elemento do início da fila: ", f1.dequeue()); // Saída: Removendo elemento da fila: 1
// Mostra o tamanho da fila após a remoção
console.log("Tamanho da fila após remoção:", f1.size()); // Saída: Novo tamanho da fila: 2
// Mostra o novo elemento inicial da fila após a remoção
console.log("Novo elemento do início da fila: ", f1.front()); // Saída: Novo elemento do início da fila: 2