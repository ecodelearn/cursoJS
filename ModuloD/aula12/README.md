# Aula 12 - Módulo D: Condições Aninhadas

## Introdução
Nesta aula, exploraremos as **condições aninhadas** em JavaScript, uma técnica para lidar com situações onde múltiplas verificações precisam ser feitas em sequência. Com as condições aninhadas, podemos verificar diferentes cenários e executar ações específicas para cada caso.

---

## O que São Condições Aninhadas?
As condições aninhadas consistem em colocar uma estrutura condicional dentro de outra, permitindo tratar múltiplas condições de forma hierárquica. Essa técnica é útil para decisões mais complexas que envolvem várias verificações consecutivas.

---

## Exemplo Prático - Classificação de Notas

### Código
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

### Explicação
- Se a nota for maior ou igual a 7, o aluno é aprovado.
- Caso contrário, verifica-se se a nota está entre 5 e 6.9 (recuperação).
- Notas abaixo de 5 resultam em reprovação.

---

## Exemplo Interativo - Classificação de Notas no Navegador

### Código HTML e JavaScript
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classificação de Notas</title>
</head>
<body>
    <h1>Verificador de Notas</h1>
    Nota: <input type="number" id="txtnota" placeholder="Digite a nota">
    <input type="button" value="Verificar" onclick="verificarNota()">
    <div id="resultado"></div>
    <script>
        function verificarNota() {
            let txtnota = document.getElementById("txtnota");
            let resultado = document.getElementById("resultado");
            let nota = Number(txtnota.value);

            if (nota >= 7) {
                resultado.innerHTML = `<p>Sua nota é ${nota}: <strong>Aprovado!</strong></p>`;
            } else {
                if (nota >= 5) {
                    resultado.innerHTML = `<p>Sua nota é ${nota}: <strong>Recuperação!</strong></p>`;
                } else {
                    resultado.innerHTML = `<p>Sua nota é ${nota}: <strong>Reprovado!</strong></p>`;
                }
            }
        }
    </script>
</body>
</html>
```

### Explicação
1. O usuário insere a nota no campo de entrada.
2. O botão "Verificar" chama a função `verificarNota`.
3. A função:
   - Verifica se a nota é maior ou igual a 7 (aprovado).
   - Caso contrário, verifica se a nota está entre 5 e 6.9 (recuperação).
   - Se a nota for menor que 5, exibe "Reprovado!".

---

## Exercício Proposto
Crie um sistema que classifique uma pessoa em diferentes faixas etárias:
- **Criança**: Até 12 anos.
- **Adolescente**: Entre 13 e 17 anos.
- **Adulto**: Entre 18 e 64 anos.
- **Idoso**: 65 anos ou mais.

### Estrutura do HTML:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classificação por Faixa Etária</title>
</head>
<body>
    <h1>Verificador de Faixa Etária</h1>
    Idade: <input type="number" id="txtidade" placeholder="Digite sua idade">
    <input type="button" value="Verificar" onclick="verificarIdade()">
    <div id="resultado"></div>
    <script>
        function verificarIdade() {
            let txtidade = document.getElementById("txtidade");
            let resultado = document.getElementById("resultado");
            let idade = Number(txtidade.value);

            if (idade <= 12) {
                resultado.innerHTML = `<p>Idade: ${idade} anos. <strong>Criança</strong></p>`;
            } else if (idade <= 17) {
                resultado.innerHTML = `<p>Idade: ${idade} anos. <strong>Adolescente</strong></p>`;
            } else if (idade <= 64) {
                resultado.innerHTML = `<p>Idade: ${idade} anos. <strong>Adulto</strong></p>`;
            } else {
                resultado.innerHTML = `<p>Idade: ${idade} anos. <strong>Idoso</strong></p>`;
            }
        }
    </script>
</body>
</html>
```

---

## Conclusão
Nesta aula, aprendemos:
- O conceito e a aplicação de condições aninhadas.
- Como lidar com múltiplas verificações hierárquicas.
- A implementação de exemplos interativos para consolidar o aprendizado.

Pratique os exemplos e o exercício proposto para reforçar sua compreensão sobre condições aninhadas em JavaScript!
