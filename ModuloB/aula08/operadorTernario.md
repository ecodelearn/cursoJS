# Operador Ternário em JavaScript

## Introdução
O operador ternário é uma forma concisa de executar uma operação condicional em JavaScript. Ele funciona como um substituto para a estrutura `if-else` em situações simples, tornando o código mais curto e legível.

## Sintaxe
A sintaxe básica do operador ternário é:

`condição ? valor_se_verdadeiro : valor_se_falso;`

- **Condição**: Uma expressão que será avaliada como `true` ou `false`.
- **Valor_se_verdadeiro**: O resultado retornado se a condição for verdadeira.
- **Valor_se_falso**: O resultado retornado se a condição for falsa.

## Exemplos Básicos

### Exemplo 1: Verificação de idade
```javascript
let idade = 18;
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado); // "Maior de idade"
```

### Exemplo 2: Checagem de números
```javascript
let numero = 10;
let parOuImpar = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(parOuImpar); // "Par"
```

### Exemplo 3: Uso aninhado (não recomendado por reduzir a legibilidade)
```javascript
let nota = 7;
let desempenho = nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";
console.log(desempenho); // "Aprovado"
```

## Comparação com `if-else`
O operador ternário pode substituir uma estrutura `if-else` simples. Veja a comparação:

### Estrutura `if-else`
```javascript
let idade = 18;
let resultado;
if (idade >= 18) {
  resultado = "Maior de idade";
} else {
  resultado = "Menor de idade";
}
console.log(resultado); // "Maior de idade"
```

### Operador Ternário
```javascript
let idade = 18;
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado); // "Maior de idade"
```

## Casos de Uso Comuns

### Exibição de valores com base em condições
```javascript
let usuarioLogado = true;
let mensagem = usuarioLogado ? "Bem-vindo!" : "Por favor, faça login.";
console.log(mensagem); // "Bem-vindo!"
```

### Valores padrão
```javascript
let nome = null;
let saudacao = nome ? `Olá, ${nome}` : "Olá, visitante!";
console.log(saudacao); // "Olá, visitante!"
```

### Simplificação de retornos em funções
```javascript
function verificarParidade(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log(verificarParidade(7)); // "Ímpar"
```

## Cuidados e Boas Práticas
1. **Evite complexidade excessiva**: Não use operadores ternários em cadeias longas, pois isso pode dificultar a leitura e manutenção do código.
   - **Ruim**:
     ```javascript
     let resultado = condicao1 ? valor1 : condicao2 ? valor2 : valor3;
     ```
   - **Melhor**:
     Use estruturas `if-else` em vez de ternários aninhados.

2. **Prefira legibilidade**: Use o operador ternário para situações simples e claras.

## Conclusão
O operador ternário é uma ferramenta poderosa para simplificar operações condicionais. Quando usado corretamente, ele torna o código mais curto e direto, sem comprometer a clareza. Pratique o uso em cenários simples para entender sua aplicação e limite.
