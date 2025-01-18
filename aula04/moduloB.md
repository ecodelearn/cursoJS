# Módulo B: Trabalhando com Dados em JavaScript

## Introdução
O Módulo B é dedicado a ensinar como lidar com dados em JavaScript, desde seu armazenamento até seu tratamento e operações. Este módulo é essencial para compreender como gerenciar informações de forma eficiente em qualquer aplicação.

---

## 1. Armazenando Dados

### Tipos de Armazenamento em JavaScript
- **Variáveis:**
  - Usadas para armazenar valores temporários.
  - Declaração com `var`, `let`, ou `const`.
  - Exemplo:
    ```javascript
    let nome = "João";
    const idade = 25;
    ```

- **Armazenamento em Arrays:**
  - Estruturas que armazenam múltiplos valores em uma única variável.
  - Exemplo:
    ```javascript
    let frutas = ["maçã", "banana", "laranja"];
    ```

- **Objetos:**
  - Usados para armazenar dados em pares chave-valor.
  - Exemplo:
    ```javascript
    let pessoa = {
      nome: "Ana",
      idade: 30,
      profissao: "Engenheira"
    };
    ```

- **LocalStorage e SessionStorage:**
  - Para armazenar dados no navegador.
  - LocalStorage persiste mesmo após fechar o navegador.
  - SessionStorage é válido apenas enquanto a aba estiver aberta.
  - Exemplo:
    ```javascript
    localStorage.setItem("usuario", "João");
    let usuario = localStorage.getItem("usuario");
    ```

---

## 2. Tratamento de Dados

### Métodos para Manipulação de Dados
- **Manipulando Strings:**
  - Métodos úteis: `toUpperCase()`, `toLowerCase()`, `split()`, `replace()`.
  - Exemplo:
    ```javascript
    let frase = "JavaScript é incrível!";
    console.log(frase.toUpperCase());
    ```

- **Trabalhando com Arrays:**
  - Métodos úteis: `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `filter()`, `reduce()`.
  - Exemplo:
    ```javascript
    let numeros = [1, 2, 3, 4, 5];
    let numerosDobro = numeros.map(numero => numero * 2);
    ```

- **Manipulação de Objetos:**
  - Usando `Object.keys()`, `Object.values()`, e `Object.entries()`.
  - Exemplo:
    ```javascript
    let pessoa = { nome: "Carlos", idade: 40 };
    console.log(Object.keys(pessoa));
    ```

---

## 3. Operações com Dados

### Operações Matemáticas
- **Operadores Aritméticos:**
  - Soma (`+`), Subtração (`-`), Multiplicação (`*`), Divisão (`/`), Módulo (`%`).
  - Exemplo:
    ```javascript
    let resultado = 10 + 5 * 2;
    console.log(resultado);
    ```

- **Biblioteca Math:**
  - Funções úteis como `Math.round()`, `Math.random()`, `Math.max()`, `Math.min()`.
  - Exemplo:
    ```javascript
    let aleatorio = Math.random() * 100;
    console.log(Math.round(aleatorio));
    ```

### Operações com Arrays
- **Reduzindo Dados:**
  - Usando o método `reduce()` para somar valores ou consolidar dados.
  - Exemplo:
    ```javascript
    let numeros = [10, 20, 30];
    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    console.log(soma);
    ```

### Operações com Strings
- **Concatenação e Interpolação:**
  - Usando `+` ou template literals.
  - Exemplo:
    ```javascript
    let nome = "Maria";
    let saudacao = `Olá, ${nome}!`;
    console.log(saudacao);
    ```

---