# Operadores de Auto-Atribuição em JavaScript

## Introdução
- Em JavaScript, operadores de **auto-atribuição** são atalhos para realizar operações aritméticas e reatribuir o resultado à mesma variável.
- Eles tornam o código mais limpo e conciso, substituindo expressões longas por formas simplificadas.

---

## Operadores de Auto-Atribuição

### 1. **Soma Atribuída (`+=`)**
- Adiciona um valor à variável e reatribui o resultado.
- Equivalente a `n = n + x`.
- Exemplo:
  ```javascript
  let n = 3;
  n += 4; // Equivalente a n = n + 4
  console.log(n); // Saída: 7
  ```

---

### 2. **Subtração Atribuída (`-=`)**
- Subtrai um valor da variável e reatribui o resultado.
- Equivalente a `n = n - x`.
- Exemplo:
  ```javascript
  let n = 10;
  n -= 5; // Equivalente a n = n - 5
  console.log(n); // Saída: 5
  ```

---

### 3. **Multiplicação Atribuída (`*=`)**
- Multiplica a variável por um valor e reatribui o resultado.
- Equivalente a `n = n * x`.
- Exemplo:
  ```javascript
  let n = 2;
  n *= 4; // Equivalente a n = n * 4
  console.log(n); // Saída: 8
  ```

---

### 4. **Divisão Atribuída (`/=`)**
- Divide a variável por um valor e reatribui o resultado.
- Equivalente a `n = n / x`.
- Exemplo:
  ```javascript
  let n = 10;
  n /= 2; // Equivalente a n = n / 2
  console.log(n); // Saída: 5
  ```

---

### 5. **Exponenciação Atribuída (`**=`)**
- Eleva a variável à potência de um valor e reatribui o resultado.
- Equivalente a `n = n ** x`.
- Exemplo:
  ```javascript
  let n = 3;
  n **= 2; // Equivalente a n = n ** 2
  console.log(n); // Saída: 9
  ```

---

### 6. **Módulo Atribuído (`%=`)**
- Calcula o resto da divisão da variável por um valor e reatribui o resultado.
- Equivalente a `n = n % x`.
- Exemplo:
  ```javascript
  let n = 10;
  n %= 3; // Equivalente a n = n % 3
  console.log(n); // Saída: 1
  ```

---

## Comparação: Forma Completa vs. Atalho
| Operação Completa      | Atalho Equivalente |
|------------------------|--------------------|
| `n = n + x`           | `n += x`          |
| `n = n - x`           | `n -= x`          |
| `n = n * x`           | `n *= x`          |
| `n = n / x`           | `n /= x`          |
| `n = n ** x`          | `n **= x`         |
| `n = n % x`           | `n %= x`          |

---

## Exemplo Prático Completo
```javascript
let n = 3;

// Soma Atribuída
n += 4; // n = 3 + 4
console.log(n); // Saída: 7

// Subtração Atribuída
n -= 2; // n = 7 - 2
console.log(n); // Saída: 5

// Multiplicação Atribuída
n *= 3; // n = 5 * 3
console.log(n); // Saída: 15

// Divisão Atribuída
n /= 5; // n = 15 / 5
console.log(n); // Saída: 3

// Exponenciação Atribuída
n **= 2; // n = 3 ** 2
console.log(n); // Saída: 9

// Módulo Atribuído
n %= 4; // n = 9 % 4
console.log(n); // Saída: 1
```

---

## Conclusão
- Os operadores de auto-atribuição simplificam operações matemáticas repetitivas, tornando o código mais legível e eficiente.
- Eles são amplamente utilizados em loops e manipulações de variáveis durante cálculos ou atualizações de estado.
