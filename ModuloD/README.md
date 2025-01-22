# Módulo D: Estruturas Condicionais

## Introdução
No **Módulo D**, exploraremos as **Estruturas Condicionais** em JavaScript, fundamentais para a criação de fluxos de decisão em programas. Estruturas condicionais permitem que o código tome diferentes direções com base em condições específicas, sendo essenciais para qualquer aplicação interativa.

Neste módulo, abordaremos os seguintes tópicos:
- Condições Simples
- Condições Compostas
- Condições Aninhadas
- Condições Múltiplas
- Exercícios Propostos

---

## Condições Simples
As condições simples avaliam uma única condição e executam um bloco de código se essa condição for verdadeira. Utilizamos a instrução `if`.

**Exemplo**:
```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

**Explicação**:
- A condição `(idade >= 18)` é avaliada.
- Se verdadeira, a mensagem "Você é maior de idade." será exibida no console.

---

## Condições Compostas
As condições compostas avaliam uma condição e permitem executar diferentes blocos de código para os casos verdadeiro (`true`) e falso (`false`). Utilizamos as instruções `if` e `else`.

**Exemplo**:
```javascript
let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

**Explicação**:
- Se a condição `(idade >= 18)` for verdadeira, o código dentro do bloco `if` será executado.
- Caso contrário, o código dentro do bloco `else` será executado.

---

## Condições Aninhadas
Condições aninhadas consistem em inserir estruturas condicionais dentro de outras. São úteis para verificar múltiplas condições sequencialmente.

**Exemplo**:
```javascript
let nota = 8;

if (nota >= 7) {
    console.log("Aprovado!");
} else {
    if (nota >= 5) {
        console.log("Recuperação!");
    } else {
        console.log("Reprovado!");
    }
}
```

**Explicação**:
- Se a nota for maior ou igual a 7, o aluno é aprovado.
- Caso contrário, é verificado se a nota é maior ou igual a 5 (recuperação).
- Para notas menores que 5, o aluno é reprovado.

---

## Condições Múltiplas
As condições múltiplas permitem avaliar vários casos específicos com a instrução `switch`. São úteis para situações onde há múltiplas possibilidades exclusivas.

**Exemplo**:
```javascript
let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido.");
        break;
}
```

**Explicação**:
- O valor da variável `dia` é comparado com cada `case`.
- Quando uma correspondência é encontrada, o bloco correspondente é executado.
- O `default` é executado caso nenhum dos `case` seja correspondente.

---

## Exercícios Propostos
1. **Condição Simples**:
   - Escreva um programa que verifique se um número é positivo e exiba uma mensagem correspondente.

2. **Condição Composta**:
   - Crie um programa que informe se uma pessoa pode votar com base na idade.

3. **Condição Aninhada**:
   - Desenvolva um programa que classifique uma nota escolar como "Aprovado", "Recuperação" ou "Reprovado".

4. **Condição Múltipla**:
   - Escreva um programa que exiba o nome do mês com base em um número fornecido (1 para Janeiro, 2 para Fevereiro, etc.).

---

## Conclusão
No **Módulo D**, aprendemos sobre as principais estruturas condicionais em JavaScript e como utilizá-las para criar fluxos de decisão em nossos programas. Pratique os exercícios propostos para solidificar seu entendimento e, em seguida, aplique esses conceitos em projetos reais para resolver problemas complexos.

As condições são a base da lógica de programação e tornam seu código inteligente e dinâmico. Continue explorando!
