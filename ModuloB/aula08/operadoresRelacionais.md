# Operadores Relacionais em JavaScript

## Introdução
Os operadores relacionais em JavaScript são usados para comparar dois valores. O resultado de uma operação relacional é sempre um valor booleano: `true` (verdadeiro) ou `false` (falso). Eles são amplamente utilizados em estruturas condicionais, como `if`, `while` e outras declarações de controle de fluxo.

---

## Principais Operadores Relacionais

### 1. Maior que (`>`)
- Verifica se o valor à esquerda é maior que o valor à direita.
- Exemplo:
  console.log(5 > 2); // true
  console.log(3 > 7); // false

### 2. Menor que (`<`)
- Verifica se o valor à esquerda é menor que o valor à direita.
- Exemplo:
  console.log(7 < 4); // false
  console.log(2 < 10); // true

### 3. Maior ou igual a (`>=`)
- Verifica se o valor à esquerda é maior ou igual ao valor à direita.
- Exemplo:
  console.log(8 >= 8); // true
  console.log(5 >= 10); // false

### 4. Menor ou igual a (`<=`)
- Verifica se o valor à esquerda é menor ou igual ao valor à direita.
- Exemplo:
  console.log(9 <= 7); // false
  console.log(5 <= 5); // true

### 5. Igual a (`==`)
- Verifica se os valores são iguais, sem levar em consideração o tipo dos dados.
- Exemplo:
  console.log(5 == '5'); // true (comparação sem considerar o tipo)
  console.log(5 == 5); // true

### 6. Estritamente igual a (`===`)
- Verifica se os valores e os tipos são iguais.
- Exemplo:
  console.log(5 === '5'); // false (os tipos são diferentes)
  console.log(5 === 5); // true

### 7. Diferente de (`!=`)
- Verifica se os valores são diferentes, sem levar em consideração o tipo dos dados.
- Exemplo:
  console.log(4 != '4'); // false (os valores são iguais)
  console.log(4 != 5); // true

### 8. Estritamente diferente de (`!==`)
- Verifica se os valores e os tipos são diferentes.
- Exemplo:
  console.log(4 !== '4'); // true (os tipos são diferentes)
  console.log(4 !== 4); // false

---

## Exemplos Práticos
let a = 10;
let b = 20;

console.log(a > b);  // false
console.log(a < b);  // true
console.log(a >= 10); // true
console.log(a <= b); // true
console.log(a == '10'); // true (valores iguais, tipos diferentes)
console.log(a === '10'); // false (valores iguais, tipos diferentes)
console.log(a != 20); // true
console.log(a !== '10'); // true

---

## Tabela de Operadores Relacionais
| Operador | Descrição                     | Exemplo         | Resultado |
|----------|-------------------------------|-----------------|-----------|
| `>`      | Maior que                    | `5 > 2`         | `true`    |
| `<`      | Menor que                    | `7 < 4`         | `false`   |
| `>=`     | Maior ou igual a             | `8 >= 8`        | `true`    |
| `<=`     | Menor ou igual a             | `9 <= 7`        | `false`   |
| `==`     | Igual a                      | `5 == '5'`      | `true`    |
| `===`    | Estritamente igual a         | `5 === '5'`     | `false`   |
| `!=`     | Diferente de                 | `4 != '4'`      | `false`   |
| `!==`    | Estritamente diferente de    | `4 !== '4'`     | `true`    |

---

## Conclusão
Os operadores relacionais são fundamentais para a criação de condições e tomadas de decisão em JavaScript. Ao compreender suas diferenças, especialmente entre as comparações simples (`==`, `!=`) e estritas (`===`, `!==`), você estará mais preparado para escrever códigos mais seguros e previsíveis.
