// Definindo a classe Grafo
class Grafo {
    constructor() {
        this.vertices = {};
    }

    // Adicionando vértices ao grafo
    adicionarVertice(nome, adjacencias) {
        this.vertices[nome] = adjacencias;
    }

    // Algoritmo de Dijkstra para calcular a menor distância entre dois vértices
    dijkstra(origem, destino) {
        const distancias = {};
        const visitados = {};
        for (let vertice in this.vertices) {
            distancias[vertice] = Infinity;
            visitados[vertice] = false;
        }
        distancias[origem] = 0;

        while (true) {
            let u = this.minDistancia(distancias, visitados);
            if (u === destino || distancias[u] === Infinity) break;
            visitados[u] = true;
            for (let v in this.vertices[u]) {
                if (!visitados[v] && this.vertices[u][v] !== 0 && distancias[u] !== Infinity && distancias[u] + this.vertices[u][v] < distancias[v]) {
                    distancias[v] = distancias[u] + this.vertices[u][v];
                }
            }
        }

        return distancias[destino] !== Infinity ? distancias[destino] : 'Não há caminho entre os vértices';
    }

    // Função auxiliar para encontrar o vértice não visitado com a menor distância mínima
    minDistancia(distancias, visitados) {
        let min = Infinity;
        let minIndex = -1;
        for (let vertice in distancias) {
            if (!visitados[vertice] && distancias[vertice] <= min) {
                min = distancias[vertice];
                minIndex = vertice;
            }
        }
        return minIndex;
    }
}

// Criando um exemplo de grafo
const grafo = new Grafo();
grafo.adicionarVertice('A', { B: 4, C: 2 });
grafo.adicionarVertice('B', { A: 4, C: 5, D: 10 });
grafo.adicionarVertice('C', { A: 2, B: 5, D: 3 });
grafo.adicionarVertice('D', { B: 10, C: 3 });

// Definindo os vértices de origem e destino
const origem = 'A';
const destino = 'D';

// Calculando a menor distância entre os vértices 'A' e 'D'
console.log('A menor distância entre os vértices ' + origem + ' e ' + destino + ' é: ' + grafo.dijkstra(origem, destino));
