class LZ78 {
    // FunÃ§Ã£o de compressÃ£o
    compress(input) {
      let dictionary = {}; // DicionÃ¡rio para armazenar as sequÃªncias
      let data = []; // Dados comprimidos
      let currentString = ""; // String atual
  
      for (let i = 0; i < input.length; i++) {
        currentString += input[i]; // Adiciona o caractere atual Ã  string
  
        if (!dictionary[currentString]) {
          // Se a string atual nÃ£o estiver no dicionÃ¡rio, adiciona
          dictionary[currentString] = Object.keys(dictionary).length + 1; // Nova entrada no dicionÃ¡rio
          data.push({ index: dictionary[currentString.slice(0, -1)] || 0, nextChar: input[i] }); // Adiciona ao output
          currentString = ""; // Reinicia a string atual
        }
      }
  
      if (currentString !== "") {
        // Se houver algo restante na string atual, adiciona ao output
        data.push({ index: dictionary[currentString.slice(0, -1)] || 0, nextChar: currentString.slice(-1) });
      }
  
      console.log("Passo a passo da compressÃ£o:");
      data.forEach((item, index) => {
        console.log(`Passo ${index + 1}: Ã­ndice=${item.index}, prÃ³ximo caractere='${item.nextChar}'`);
      });
  
      return data;
    }
  
    // FunÃ§Ã£o de descompressÃ£o
    decompress(compressed) {
      let dictionary = [""]; // DicionÃ¡rio inicializado com uma string vazia
      let output = "";
  
      compressed.forEach((item, index) => {
        // Recupera a sequÃªncia do dicionÃ¡rio e adiciona o prÃ³ximo caractere
        let entry = (dictionary[item.index] || "") + item.nextChar; // Corrige o acesso ao dicionÃ¡rio para evitar undefined
        output += entry; // Adiciona ao output final
        dictionary.push(entry); // Adiciona a nova entrada ao dicionÃ¡rio
  
        console.log(`Passo ${index + 1}: entrada='${entry}', output atual='${output}'`);
      });
  
      return output;
    }
  }
  
  // Exemplo de uso
  const lz78 = new LZ78();
  const input = "Ana Laura D4";
  console.log("Texto original:", input);
  
  // CompressÃ£o
  const compressed = lz78.compress(input);
  console.log("Texto comprimido:", compressed);
  
  // DescompressÃ£o
  const decompressed = lz78.decompress(compressed);
  console.log("Texto descomprimido:", decompressed);