# Trabalhando com Números em JavaScript

## Introdução
- Em JavaScript, há diversos métodos para manipulação de números e formatação de valores numéricos.
- Nesta seção, vamos explorar métodos como `toFixed` e o uso de `Intl.NumberFormat` para formatação de moeda local.

---

## Métodos de Manipulação de Números

### **1. toFixed()**
- O método `toFixed` é usado para formatar um número com um número fixo de casas decimais.
- Ele retorna uma string representando o número formatado.
- Exemplo:
  ```javascript
  let n1 = 1545.5;
  console.log(n1.toFixed(2)); // "1545.50"
  ```

#### **Substituindo o Separador Decimal**
- Em alguns locais, o separador decimal é uma vírgula (`,`) em vez de um ponto (`.`).
- Podemos usar o método `replace` para ajustar o formato:
  ```javascript
  console.log(n1.toFixed(2).replace('.', ',')); // "1545,50"
  ```

---

## Formatação de Moeda Local

### **2. toLocaleString()**
- O método `toLocaleString` é usado para formatar números de acordo com uma localidade específica.
- Ele permite definir o estilo e a moeda.
- Exemplo:
  ```javascript
  console.log(n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  // Saída: "R$ 1.545,50"
  ```

#### **Parâmetros do toLocaleString**
1. **Localidade (`locale`)**
   - Define o formato de acordo com a região.
   - Exemplos: `pt-BR` (Português - Brasil), `en-US` (Inglês - EUA).

2. **Opções (`options`)**
   - `style`: Define o estilo de formatação. Valores comuns incluem:
     - `decimal`: Formato padrão para números decimais.
     - `currency`: Formato de moeda.
     - `percent`: Formato de porcentagem.
   - `currency`: Especifica a moeda (necessário quando `style` é `currency`). Exemplos:
     - `BRL` (Real), `USD` (Dólar), `EUR` (Euro).

---

## Exemplos Práticos

### **Formatando Números Decimais**
```javascript
let numero = 1234.567;
console.log(numero.toFixed(2)); // "1234.57"
console.log(numero.toFixed(0)); // "1235"
```

### **Formatando Moeda**
```javascript
let preco = 199.99;
console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
// Saída: "R$ 199,99"

console.log(preco.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// Saída: "$199.99"
```

### **Formatando Porcentagem**
```javascript
let taxa = 0.075;
console.log(taxa.toLocaleString('pt-BR', { style: 'percent' }));
// Saída: "7,5%"
```

---

## Comparação entre Métodos

| Método           | Propósito                                    | Saída                          |
|------------------|---------------------------------------------|--------------------------------|
| `toFixed`        | Define o número de casas decimais           | "1545.50"                     |
| `replace`        | Substitui caracteres em uma string          | "1545,50"                     |
| `toLocaleString` | Formata número com base na localidade       | "R$ 1.545,50" (para pt-BR)    |

---

## Conclusão
- Métodos como `toFixed` e `toLocaleString` tornam a manipulação e formatação de números em JavaScript simples e eficiente.
- O uso correto dessas ferramentas é essencial para lidar com números em diferentes contextos, como exibição de preços e cálculos financeiros.
