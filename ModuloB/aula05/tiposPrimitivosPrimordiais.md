# Tipos de Dados (Data Types) em JavaScript

## Introdução
- Em JavaScript, os tipos de dados são categorizados em dois grupos principais: **primitivos** e **não primitivos (objetos)**.
- A compreensão dos tipos de dados é fundamental para manipular informações de forma eficiente.

---

## Tipos de Dados Primitivos

### **1. Number**
- Representa números inteiros e de ponto flutuante.
- Exemplos:
  ```javascript
  let inteiro = 10;         // Inteiro
  let decimal = 3.14;       // Ponto flutuante
  let negativo = -42;       // Número negativo
  console.log(typeof inteiro); // "number"
  ```

#### **Infinity** e **NaN**
- **Infinity:** Representa infinito matemático.
  ```javascript
  console.log(1 / 0);         // Infinity
  console.log(typeof Infinity); // "number"
  ```
- **NaN (Not-a-Number):** Representa um valor que não é um número válido.
  ```javascript
  console.log("texto" * 2);  // NaN
  console.log(typeof NaN);    // "number"
  ```

---

### **2. String**
- Representa texto e é delimitada por aspas simples (`'`), duplas (`"`) ou crase (`` ` ``).
- Exemplos:
  ```javascript
  let texto = "Olá";
  let linguagem = 'JavaScript';
  let saudacao = `Bem-vindo!`;
  console.log(typeof texto); // "string"
  ```

---

### **3. Boolean**
- Representa valores lógicos: `true` ou `false`.
- Exemplos:
  ```javascript
  let ativo = true;
  let inativo = false;
  console.log(typeof ativo); // "boolean"
  ```

---

### **4. Null**
- Representa a ausência intencional de qualquer valor.
- É tratado como um objeto (peculiaridade do JavaScript).
- Exemplo:
  ```javascript
  let vazio = null;
  console.log(typeof vazio); // "object"
  ```

---

### **5. Undefined**
- Representa uma variável que foi declarada, mas não inicializada.
- Exemplo:
  ```javascript
  let indefinido;
  console.log(typeof indefinido); // "undefined"
  ```

---

## Tipos Não Primitivos (Objetos)

### **6. Object**
- Representa coleções de pares chave-valor.
- Exemplos:
  ```javascript
  let pessoa = { nome: "Ana", idade: 25 };
  console.log(typeof pessoa); // "object"
  ```

---

### **7. Array**
- Uma coleção ordenada de valores.
- Embora tecnicamente seja um objeto, os arrays têm características específicas.
- Exemplo:
  ```javascript
  let numeros = [1, 2, 3, 4];
  console.log(typeof numeros); // "object"
  ```

---

### **8. Function**
- Representa blocos de código reutilizáveis.
- Exemplo:
  ```javascript
  function soma(a, b) {
    return a + b;
  }
  console.log(typeof soma); // "function"
  ```

---

## Resumo dos Tipos e `typeof`

| Tipo          | Exemplo                 | `typeof`      |
|---------------|-------------------------|---------------|
| Number        | `let x = 42;`          | `"number"`    |
| Infinity      | `let x = 1 / 0;`       | `"number"`    |
| NaN           | `let x = "a" * 3;`    | `"number"`    |
| String        | `let x = "texto";`    | `"string"`    |
| Boolean       | `let x = true;`        | `"boolean"`   |
| Null          | `let x = null;`        | `"object"`    |
| Undefined     | `let x;`               | `"undefined"` |
| Object        | `let x = {a: 1};`      | `"object"`    |
| Array         | `let x = [1, 2, 3];`   | `"object"`    |
| Function      | `let x = function() {};` | `"function"` |

---

## Conclusão
- Os tipos de dados em JavaScript são essenciais para a manipulação de informações.
- Compreender o uso de `typeof` ajuda a identificar o tipo de qualquer valor, garantindo maior precisão no desenvolvimento de aplicações.
