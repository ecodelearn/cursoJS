# Ordem de Precedência dos Operadores em JavaScript

## Introdução
Em JavaScript, a **ordem de precedência dos operadores** define a sequência em que as operações são realizadas. Operadores com maior precedência são avaliados antes de operadores com menor precedência. Quando dois operadores possuem a mesma precedência, a avaliação ocorre da **esquerda para a direita** ou da **direita para a esquerda**, dependendo do operador.

---

## Tabela de Precedência
Abaixo está a hierarquia dos operadores usados nos exemplos:

1. **Parênteses** `()`
2. **Exponenciação** `**`
3. **Multiplicação, Divisão e Módulo** `*`, `/`, `%`
4. **Adição e Subtração** `+`, `-`
5. **Operadores Relacionais** `<`, `>`, `<=`, `>=`
6. **Igualdade** `==`, `!=`, `===`, `!==`
7. **Operador Lógico NÃO** `!`
8. **Operador Lógico E** `&&`
9. **Operador Lógico OU** `||`

---

## Exemplos de Precedência

### 1. Operadores Lógicos
let a = 5;
let b = 8;

// Operador && (E)
console.log(true && false); // false
console.log(true && true);  // true

// Operador || (OU)
console.log(false || false); // false
console.log(false || true);  // true
console.log(true || true);   // true

### 2. Combinação de Operadores Relacionais e Lógicos
console.log(a > b && b % 2 == 0); // false
// Explicação:
// 1. a > b -> 5 > 8 -> false
// 2. b % 2 == 0 -> 8 % 2 == 0 -> true
// 3. false && true -> false

console.log(a <= b || b / 2 == 2); // true
// Explicação:
// 1. a <= b -> 5 <= 8 -> true
// 2. b / 2 == 2 -> 8 / 2 == 2 -> true
// 3. true || true -> true

---

## Ordem de Avaliação Detalhada

### Exemplo 1: `a > b && b % 2 == 0`
1. Avaliação do operador relacional:
   - `a > b` avalia se `5 > 8`, resultando em `false`.
   - `b % 2 == 0` avalia se `8 % 2 == 0`, resultando em `true`.
2. Operador lógico `&&` é avaliado por último:
   - `false && true` resulta em `false`.

### Exemplo 2: `a <= b || b / 2 == 2`
1. Avaliação do operador relacional:
   - `a <= b` avalia se `5 <= 8`, resultando em `true`.
   - `b / 2 == 2` avalia se `8 / 2 == 2`, resultando em `true`.
2. Operador lógico `||` é avaliado por último:
   - `true || true` resulta em `true`.

---

## Dicas para Trabalhar com Precedência
1. **Use parênteses**: Sempre que houver dúvidas sobre a ordem de avaliação, utilize parênteses para tornar o código mais claro e explícito.
   console.log((a > b) && (b % 2 == 0)); // false
2. **Conheça a precedência**: Dominar a hierarquia dos operadores evita erros de lógica em expressões complexas.
3. **Teste suas expressões**: Utilize o console ou editores de código para testar a ordem de avaliação.

---

## Conclusão
Compreender a ordem de precedência dos operadores em JavaScript é essencial para escrever códigos corretos e eficientes. Praticar a criação de expressões combinando diferentes operadores ajuda a consolidar o aprendizado e evitar erros lógicos no desenvolvimento.
