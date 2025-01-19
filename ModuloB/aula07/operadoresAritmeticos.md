# Operadores Aritméticos em JavaScript

## Introdução
- Operadores aritméticos são usados para realizar cálculos matemáticos em JavaScript.
- Eles operam sobre operandos, que podem ser valores numéricos ou variáveis que armazenam números.

---

## Principais Operadores Aritméticos

### **1. Soma (`+`)**
- Realiza a adição de dois valores.
- Exemplo:
  ```javascript
  let resultado = 5 + 2;
  console.log(resultado); // Saída: 7
  ```

### **2. Subtração (`-`)**
- Subtrai o segundo valor do primeiro.
- Exemplo:
  ```javascript
  let resultado = 5 - 2;
  console.log(resultado); // Saída: 3
  ```

### **3. Multiplicação (`*`)**
- Multiplica dois valores.
- Exemplo:
  ```javascript
  let resultado = 5 * 2;
  console.log(resultado); // Saída: 10
  ```

### **4. Divisão (`/`)**
- Divide o primeiro valor pelo segundo.
- Exemplo:
  ```javascript
  let resultado = 5 / 2;
  console.log(resultado); // Saída: 2.5
  ```

### **5. Módulo (`%`)**
- Retorna o resto da divisão do primeiro valor pelo segundo.
- Exemplo:
  ```javascript
  let resultado = 5 % 2;
  console.log(resultado); // Saída: 1
  ```

### **6. Exponenciação (`**`)**
- Calcula o valor do primeiro número elevado à potência do segundo.
- Exemplo:
  ```javascript
  let resultado = 5 ** 2;
  console.log(resultado); // Saída: 25
  ```

---

## Operadores e Tipos de Dados
- Os operadores aritméticos podem ser usados com números inteiros e de ponto flutuante.
- Exemplo:
  ```javascript
  let soma = 1.5 + 2.3; // Saída: 3.8
  let divisao = 10 / 3; // Saída: 3.333...
  ```

---

## Ordem de Precedência
- A ordem de execução dos operadores segue as regras matemáticas (precedência):
  1. **Parênteses** `()`
  2. **Exponenciação** `**`
  3. **Multiplicação, Divisão e Módulo** `* / %`
  4. **Soma e Subtração** `+ -`
- Exemplo:
  ```javascript
  let resultado = 5 + 2 * 3; // Multiplicação primeiro
  console.log(resultado); // Saída: 11

  let resultado2 = (5 + 2) * 3; // Parênteses primeiro
  console.log(resultado2); // Saída: 21
  ```

---

## Operadores Combinados
- Operadores aritméticos podem ser combinados com atribuição.
- Exemplo:
  ```javascript
  let valor = 10;
  valor += 5; // Equivalente a valor = valor + 5
  console.log(valor); // Saída: 15

  valor *= 2; // Equivalente a valor = valor * 2
  console.log(valor); // Saída: 30
  ```

---

## Comparação de Operadores
| Operador | Descrição                | Exemplo         | Saída |
|----------|--------------------------|-----------------|-------|
| `+`      | Soma                    | `5 + 2`         | `7`   |
| `-`      | Subtração               | `5 - 2`         | `3`   |
| `*`      | Multiplicação           | `5 * 2`         | `10`  |
| `/`      | Divisão                 | `5 / 2`         | `2.5` |
| `%`      | Módulo (resto)          | `5 % 2`         | `1`   |
| `**`     | Exponenciação           | `5 ** 2`        | `25`  |

---

## Conclusão
- Operadores aritméticos são fundamentais em qualquer linguagem de programação, incluindo JavaScript.
- Compreender sua funcionalidade e ordem de precedência é essencial para realizar cálculos e manipular valores de forma eficiente.
