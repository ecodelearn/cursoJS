# Aula 11 - Módulo D: Condições em JavaScript

## Introdução
Nesta aula, exploraremos as condições em JavaScript, abordando os conceitos de condições simples e compostas. Por meio de exemplos práticos e interatividade, entenderemos como criar fluxos de decisão eficientes para lidar com diferentes situações em nossos programas.

---

## Código `ex008.js`
O primeiro exemplo (`ex008.js`) demonstra o uso de uma condição simples para verificar a velocidade de um carro e emitir uma mensagem caso o limite seja ultrapassado.

```javascript
let vel = 12.5;
console.log(`A velocidade do carro é ${vel} km/h.`);
if (vel > 60) { // Condição simples
    console.log(`Você ultrapassou a velocidade permitida de ${vel} km/h. MULTADO!`);
}
console.log(`Dirija sempre usando o cinto de segurança!`);
```

**Explicação**:
- A variável `vel` é definida com o valor 12.5 km/h.
- O `if` verifica se a velocidade é maior que 60. Se for, exibe a mensagem de multa.
- Uma mensagem adicional recomenda o uso do cinto de segurança, independente da velocidade.

---

## Código `ex009.js`
O segundo exemplo (`ex009.js`) utiliza uma condição composta para verificar a nacionalidade de uma pessoa e exibir mensagens apropriadas.

```javascript
let pais = 'Brasil';
console.log(`Vivendo em ${pais}`);
if (pais != 'Brasil') { 
    console.log(`Você é Estrangeiro!`);
} else {
    console.log(`Você é Brasileiro!`);
}
```

**Explicação**:
- A variável `pais` armazena o nome do país.
- O `if` verifica se o valor de `pais` é diferente de "Brasil".
- Se a condição for verdadeira, exibe "Você é Estrangeiro!". Caso contrário, exibe "Você é Brasileiro!".

---

## Código `ex010.html`
O arquivo `ex010.html` implementa um sistema interativo para verificar a velocidade de um carro. O usuário insere a velocidade, e o programa exibe mensagens de acordo com o valor informado.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DETRAN</title>
</head>
<body>
    <h1>Sistema de Multas</h1>
    Velocidade do carro: <input type="number" name="txtvel" id="txtvel"> km/h
    <input type="button" value="verificar" onclick="calcular()">
    <div id="res"></div>
    <script>
        function calcular() {
            let txtv = window.document.querySelector('input#txtvel');
            let res = window.document.querySelector('div#res');
            let vel = Number(txtv.value);
            res.innerHTML = `<p>A velocidade do carro de: <strong>${vel} km/h.</strong></p>`;
            if (vel > 60) {
                res.innerHTML += `<p>Você ultrapassou o limite de velocidade permitido de <strong>${vel} km/h.</strong> MULTADO!</p>`;
            }
            res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`;
        }
    </script>
</body>
</html>
```

**Explicação**:
- O usuário insere a velocidade no campo de entrada.
- O botão "Verificar" chama a função `calcular`.
- A função verifica se a velocidade é maior que 60 e exibe mensagens apropriadas no navegador.

---

## Exercício Proposto - Verificador de Nacionalidade Interativo
Baseando-se no exemplo de `ex009.js`, crie um sistema interativo que verifica a nacionalidade de uma pessoa e exibe mensagens no navegador.

**Código HTML**:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Nacionalidade</title>
</head>
<body>
    <h1>Verifique sua Nacionalidade</h1>
    Nacionalidade: <input type="text" id="txtpais" placeholder="Digite seu país">
    <input type="button" value="Verificar" onclick="verificar()">
    <div id="res"></div>
    <script>
        function verificar() {
            let pais = document.getElementById('txtpais').value;
            let res = document.getElementById('res');
            if (pais.toLowerCase() !== 'brasil') {
                res.innerHTML = `<p>Você é Estrangeiro!</p>`;
            } else {
                res.innerHTML = `<p>Você é Brasileiro!</p>`;
            }
        }
    </script>
</body>
</html>
```

**Explicação**:
- O usuário insere sua nacionalidade em um campo de texto.
- O botão "Verificar" chama a função `verificar`.
- O JavaScript compara o valor informado com "Brasil" (ignorando maiúsculas/minúsculas) e exibe a mensagem correspondente.

---

## Conclusão
Nesta aula, exploramos:
- **Condições simples**: Verificação de velocidade com o arquivo `ex008.js`.
- **Condições compostas**: Diferenciação de nacionalidades com o arquivo `ex009.js`.
- **Interatividade em HTML**: Implementação de um sistema de multas com o arquivo `ex010.html`.
- **Exercício proposto**: Verificador de nacionalidade interativo.

Pratique os exemplos fornecidos e o exercício proposto para consolidar seu entendimento sobre condições e lógica em JavaScript.
