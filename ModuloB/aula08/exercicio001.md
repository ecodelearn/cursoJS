# Exercício: Operadores Relacionais em JavaScript

## Introdução
Neste exercício, vamos analisar o uso de operadores relacionais aplicados a variáveis e suas condições. Cada exemplo apresentado demonstra como verificar condições usando os operadores relacionais e retorna um valor booleano (`true` ou `false`) dependendo da condição.

---

## Exemplos e Explicações

### **1. `preço >= 200.50`**
- Verifica se o valor da variável `preço` é maior ou igual a `200.50`.
- **Explicação**: O operador `>=` verifica a condição de ser maior ou igual.
- **Saída esperada**:
  - Se `preço = 200.50`, o resultado será `true`.
  - Se `preço = 150.00`, o resultado será `false`.

---

### **2. `idade < 18`**
- Verifica se a variável `idade` contém um valor menor do que `18`.
- **Explicação**: O operador `<` verifica a condição de ser menor.
- **Saída esperada**:
  - Se `idade = 17`, o resultado será `true`.
  - Se `idade = 18`, o resultado será `false`.

---

### **3. `curso == 'JavaScript'`**
- Verifica se o valor da variável `curso` é igual a `'JavaScript'`.
- **Explicação**: O operador `==` compara os valores sem levar em conta o tipo (não rigoroso).
- **Saída esperada**:
  - Se `curso = 'JavaScript'`, o resultado será `true`.
  - Se `curso = 'javaScript'`, o resultado será `false` (por causa da diferença entre maiúsculas e minúsculas).

---

### **4. `n1 != n2`**
- Verifica se o valor da variável `n1` é diferente do valor de `n2`.
- **Explicação**: O operador `!=` compara os valores sem levar em conta o tipo (não rigoroso).
- **Saída esperada**:
  - Se `n1 = 5` e `n2 = 10`, o resultado será `true`.
  - Se `n1 = 5` e `n2 = 5`, o resultado será `false`.

---

## Código Consolidado
Aqui está o código com os exemplos descritos acima:

```javascript
// Exemplo 1: Maior ou igual
let preco = 200.50;
console.log(preco >= 200.50); // true

// Exemplo 2: Menor que
let idade = 17;
console.log(idade < 18); // true

// Exemplo 3: Igual
let curso = 'JavaScript';
console.log(curso == 'JavaScript'); // true

// Exemplo 4: Diferente
let n1 = 5;
let n2 = 10;
console.log(n1 != n2); // true
