# Aula 5 - Identificadores em JavaScript

## O que são Identificadores?
- Identificadores são nomes usados para identificar variáveis, funções ou outros elementos no código.
- Em JavaScript, há regras específicas que devem ser seguidas ao nomear identificadores.

---

## Regras para Identificadores

1. **Podem começar com letras, `$` ou `_`:**
   - Exemplos válidos:
     ```javascript
     let nome;
     let $dolar;
     let _underscore;
     ```

2. **Não podem começar com números:**
   - Exemplos inválidos:
     ```javascript
     let 1numero; // Inválido
     ```
   - Exemplos válidos:
     ```javascript
     let numero1; // Válido
     ```

3. **Podem conter letras e números:**
   - Exemplos válidos:
     ```javascript
     let nome123;
     ```

4. **Não podem conter espaços:**
   - Deve-se usar camelCase ou underscore para palavras compostas:
     ```javascript
     let nomeCompleto; // Camel case
     let nome_completo; // Underscore
     ```

5. **Não podem ser palavras reservadas:**
   - Palavras reservadas são usadas pela linguagem e não podem ser usadas como identificadores.
   - Exemplos de palavras reservadas:
     - `let`, `const`, `var`, `function`, `if`, `else`, `return`, etc.
   - Exemplos inválidos:
     ```javascript
     let function; // Inválido
     ```

6. **Podem usar caracteres Unicode, incluindo acentos e símbolos, mas não é uma prática recomendada:**
   - Exemplos válidos (mas não recomendados):
     ```javascript
     let café;
     let número;
     ```

---

## Boas Práticas para Nomear Identificadores

1. **Use nomes descritivos:**
   - Escolha nomes que expliquem a finalidade da variável ou função.
   - Exemplo:
     ```javascript
     let idade = 25;
     let precoProduto = 99.99;
     ```

2. **Prefira camelCase para variáveis e funções:**
   - Exemplo:
     ```javascript
     let nomeCompleto;
     function calcularTotal() {}
     ```

3. **Use UPPER_SNAKE_CASE para constantes:**
   - Exemplo:
     ```javascript
     const TAXA_DESCONTO = 0.1;
     ```

4. **Evite abreviações:**
   - Prefira nomes completos e significativos.
   - Exemplo:
     ```javascript
     let valorTotal; // Em vez de vt
     ```

---

## Exemplo Completo
```javascript
// Variáveis
let nome = "João";
let idade = 30;
let enderecoCompleto = "Rua A, Número 123";

// Constantes
const TAXA_DESCONTO = 0.15;

// Funções
function calcularPrecoFinal(preco, desconto) {
  return preco - (preco * desconto);
}

// Uso da função
let precoFinal = calcularPrecoFinal(100, TAXA_DESCONTO);
console.log(`Preço final: ${precoFinal}`);
```

---

## Conclusão
- Nomear identificadores de forma clara e respeitando as regras da linguagem é essencial para criar códigos legíveis e livres de erros.
- Seguir boas práticas contribui para a manutenção e escalabilidade do código no futuro.
