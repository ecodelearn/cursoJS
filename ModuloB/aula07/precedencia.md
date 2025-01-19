# Precedência de Operadores em JavaScript

## Introdução
- A ordem de precedência dos operadores em JavaScript segue as regras matemáticas, onde alguns operadores têm maior prioridade do que outros.
- A ordem padrão é:
  1. **Parênteses**: Calcula primeiro o que está entre parênteses.
  2. **Exponenciação (`**`)**: Calcula potências.
  3. **Multiplicação (`*`), Divisão (`/`), e Módulo (`%`)**: Processados da esquerda para a direita.
  4. **Soma (`+`) e Subtração (`-`)**: Processados da esquerda para a direita.

---

## Análise dos Exemplos

### **1. `let a = 5 + 3`**
- Soma é calculada primeiro, já que não há outros operadores:
  ```javascript
  a = 5 + 3; // Resultado: 8
  ```

---

### **2. `let b = a % 5`**
- `a` já foi definido como `8`.
- O operador `%` (módulo) tem precedência mais alta do que atribuição:
  ```javascript
  b = 8 % 5; // Resto da divisão de 8 por 5 é 3
  ```

---

### **3. `let c = 5 * b ** 2`**
- A precedência aqui é:
  1. **Exponenciação (`**`)** é avaliada primeiro.
  2. **Multiplicação (`*`)** é avaliada depois.
- Passo a passo:
  ```javascript
  b = 3;
  c = 5 * (3 ** 2); // c = 5 * 9 = 45
  ```

---

### **4. `let d = 10 - a / 2`**
- A precedência aqui é:
  1. **Divisão (`/`)** é calculada primeiro.
  2. **Subtração (`-`)** é avaliada depois.
- Passo a passo:
  ```javascript
  a = 8;
  d = 10 - (8 / 2); // d = 10 - 4 = 6
  ```

---

### **5. `let e = 6 * 2 / d`**
- A precedência aqui é:
  1. **Multiplicação (`*`)** e **Divisão (`/`)** têm a mesma precedência, sendo avaliadas da **esquerda para a direita**.
- Passo a passo:
  ```javascript
  d = 6;
  e = (6 * 2) / 6; // e = 12 / 6 = 2
  ```

---

### **6. `let f = b % 2 + 4 / 2`**
- A precedência aqui é:
  1. **Módulo (`%`)** e **Divisão (`/`)** são avaliados primeiro, da **esquerda para a direita**.
  2. **Soma (`+`)** é avaliada depois.
- Passo a passo:
  ```javascript
  b = 3;
  f = (3 % 2) + (4 / 2); // f = 1 + 2 = 3
  ```

---

## Resumo Final dos Valores
Após todos os cálculos, os valores das variáveis são:
```javascript
let a = 8;
let b = 3;
let c = 45;
let d = 6;
let e = 2;
let f = 3;
```

---

## Conclusão
- Compreender a precedência dos operadores é essencial para evitar resultados inesperados em cálculos.
- Quando em dúvida, utilize parênteses para explicitar a ordem de execução dos cálculos.
- Essa prática melhora a legibilidade do código e evita erros lógicos.
