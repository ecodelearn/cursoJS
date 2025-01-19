# Operadores em JavaScript

## Introdução
Nesta aula, vamos explorar todos os tipos de operadores em JavaScript, com foco especial nos **operadores relacionais**, **lógicos** e **ternário**. Entender como esses operadores funcionam é fundamental para controlar o fluxo de execução do código e manipular condições lógicas de forma eficiente.

---

## Tipos de Operadores
Os operadores em JavaScript podem ser classificados em:

### 1. **Aritméticos**
- Realizam operações matemáticas.
- Exemplos: `+`, `-`, `*`, `/`, `%`, `**`.

### 2. **De Atribuição**
- Usados para atribuir valores a variáveis.
- Exemplos: `=`, `+=`, `-=`, `*=`, `/=`, `%=`.

### 3. **Relacionais** (Destaque nesta aula)
- Comparadores que retornam valores booleanos (`true` ou `false`).
- Exemplos: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`.

### 4. **Lógicos** (Destaque nesta aula)
- Usados para combinação ou negação de condições.
- Exemplos: `&&` (E), `||` (OU), `!` (Não).

### 5. **Ternário** (Destaque nesta aula)
- Uma forma abreviada de criar uma expressão condicional.
- Sintaxe: `condição ? valor1 : valor2`.

---

## O que veremos nesta aula
```javascript
// Operadores Relacionais
let a = 5;
let b = 10;
console.log(a > b);  // false
console.log(a <= b); // true
console.log(a == "5");  // true (comparação simples)
console.log(a === "5"); // false (comparação estrita)

// Operadores Lógicos
let idade = 20;
let habilitado = true;
console.log(idade >= 18 && habilitado); // true (E)
console.log(idade >= 18 || habilitado); // true (OU)
console.log(!habilitado); // false (Não)

// Operador Ternário
let nota = 7;
let resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado); // "Aprovado"
