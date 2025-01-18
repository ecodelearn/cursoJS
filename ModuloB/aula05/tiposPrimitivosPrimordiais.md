# Tipos Primitivos em JavaScript

## O que são Tipos Primitivos?
- Em JavaScript, tipos primitivos são os tipos de dados básicos que não são objetos e representam valores imutáveis.
- Eles formam a base para a manipulação de dados na linguagem.

---

## Principais Tipos Primitivos

### **1. Number**
- Representa números inteiros e de ponto flutuante.
- Exemplos de valores:
  ```javascript
  let inteiro = 5;      // Número inteiro
  let negativo = -12;   // Número negativo
  let decimal = 3.14;   // Número de ponto flutuante
  ```
- Principais características:
  - Suporta operações aritméticas como soma, subtração, multiplicação e divisão.
  - Valores especiais: `Infinity`, `-Infinity` e `NaN` (Not-a-Number).

---

### **2. String**
- Representa sequências de caracteres (texto).
- Pode ser delimitada por:
  - Aspas duplas (`"`):
    ```javascript
    let nome = "Google";
    ```
  - Aspas simples (`'`):
    ```javascript
    let linguagem = 'JavaScript';
    ```
  - Template literals (crase `` ` ``):
    ```javascript
    let saudacao = `Olá, Maria!`;
    ```
- Principais características:
  - Métodos comuns: `length`, `toUpperCase()`, `toLowerCase()`, `split()`, etc.
  - Suporta interpolação com template literals:
    ```javascript
    let idade = 25;
    console.log(`Tenho ${idade} anos.`);
    ```

---

### **3. Boolean**
- Representa valores lógicos: `true` (verdadeiro) ou `false` (falso).
- Usado em condições e controle de fluxo.
- Exemplos:
  ```javascript
  let maiorDeIdade = true;
  let temPermissao = false;
  ```
- Principais características:
  - Utilizado em operações lógicas (e.g., `&&`, `||`, `!`).
  - Comumente usado em comparações:
    ```javascript
    let idade = 18;
    console.log(idade >= 18); // true
    ```

---

### **Outros Tipos Primitivos**

#### **4. Undefined**
- Representa a ausência de valor atribuído.
- Exemplo:
  ```javascript
  let indefinido;
  console.log(indefinido); // undefined
  ```

#### **5. Null**
- Representa a ausência intencional de qualquer valor.
- Exemplo:
  ```javascript
  let vazio = null;
  ```

#### **6. Symbol (ES6)**
- Representa um identificador único e imutável.
- Exemplo:
  ```javascript
  let simbolo = Symbol("id");
  ```

#### **7. BigInt (ES11)**
- Representa números inteiros maiores que `Number.MAX_SAFE_INTEGER`.
- Exemplo:
  ```javascript
  let big = 123456789012345678901234567890n;
  ```

---

## Exemplo Prático
```javascript
// Exemplos de tipos primitivos
let numero = 42;          // Number
let texto = "Olá";        // String
let verdade = true;       // Boolean
let indefinido;           // Undefined
let nulo = null;          // Null
let simbolo = Symbol();   // Symbol
let numeroGrande = 9007199254740991n; // BigInt

console.log(typeof numero); // "number"
console.log(typeof texto);  // "string"
console.log(typeof verdade); // "boolean"
console.log(typeof indefinido); // "undefined"
console.log(typeof nulo);      // "object" (peculiaridade do JavaScript)
console.log(typeof simbolo);   // "symbol"
console.log(typeof numeroGrande); // "bigint"
```

---

## Conclusão
- Os tipos primitivos são fundamentais para a manipulação de dados em JavaScript.
- Compreender suas características ajuda no desenvolvimento de código mais eficiente e livre de erros.
