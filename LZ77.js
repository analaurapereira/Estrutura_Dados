class LZ77 {
    constructor(windowSize) {
      this.windowSize = windowSize; // Tamanho da janela de busca
    }
  
    // FunÃ§Ã£o de compressÃ£o
    compress(input) {
      let output = [];
      let i = 0;
  
      while (i < input.length) {
        let match = { distance: 0, length: 0 }; // Inicializa o maior match encontrado
  
        // Determina o inÃ­cio da janela de busca
        let start = Math.max(0, i - this.windowSize);
  
        for (let j = start; j < i; j++) {
          let length = 0;
  
          // Enquanto os caracteres coincidirem, incrementa o comprimento do match
          while (i + length < input.length && input[j + length] === input[i + length]) {
            length++;
          }
  
          // Verifica se o comprimento encontrado Ã© maior que o atual
          if (length > match.length) {
            match.distance = i - j;
            match.length = length;
          }
        }
  
        // Se encontrou um match, adiciona ao output
        if (match.length > 0) {
          let nextChar = input[i + match.length] || ''; // Corrige para evitar undefined
          output.push({ distance: match.distance, length: match.length, nextChar: nextChar });
          i += match.length + 1; // AvanÃ§a o Ã­ndice de entrada
        } else {
          // Se nÃ£o encontrou match, adiciona o caractere atual
          output.push({ distance: 0, length: 0, nextChar: input[i] });
          i++;
        }
      }
  
      console.log("Passo a passo da compressÃ£o:");
      output.forEach((item, index) => {
        console.log(`Passo ${index + 1}: distÃ¢ncia=${item.distance}, comprimento=${item.length}, prÃ³ximo caractere='${item.nextChar}'`);
      });
  
      return output;
    }
  
    // FunÃ§Ã£o de descompressÃ£o
    decompress(compressed) {
      let output = "";
  
      compressed.forEach((item, index) => {
        if (item.distance > 0) {
          // Se houver um match, adiciona a sequÃªncia correspondente ao output
          let start = output.length - item.distance;
          for (let j = 0; j < item.length; j++) {
            output += output[start + j];
          }
        }
  
        if (item.nextChar) { // Verifica se existe um prÃ³ximo caractere vÃ¡lido
          output += item.nextChar;
        }
  
        console.log(`Passo ${index + 1}: output atual='${output}'`);
      });
  
      return output;
    }
  }
  
  // Exemplo de uso
  const lz77 = new LZ77(6); // Tamanho da janela de busca = 6
  const input = "Ana Laura D4";
  console.log("Texto original:", input);
  
  // CompressÃ£o
  const compressed = lz77.compress(input);
  console.log("Texto comprimido:", compressed);
  
  // DescompressÃ£o
  const decompressed = lz77.decompress(compressed);
  console.log("Texto descomprimido:", decompressed);