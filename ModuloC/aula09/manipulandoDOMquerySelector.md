# Manipulação de DOM via querySelector

## Introdução
A manipulação de DOM permite que você interaja com os elementos HTML de uma página, alterando conteúdo, estilos e atributos de forma dinâmica. Neste arquivo, abordaremos a utilização do método `querySelector` para selecionar elementos usando diferentes tipos de seletores: `@` (tag), `#` (ID), `.` (classe), seletores compostos e pseudo-classes.

Usando o exemplo de código HTML fornecido, veremos como acessar e modificar os elementos de forma prática e eficiente.

---

## HTML de Referência
O código HTML utilizado para os exemplos é o seguinte:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeiros passos com DOM</title>
    <style>
        body {
            background-color: rgb(88, 132, 207);
            color: white;
            font: normal 20pt Arial;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Iniciando estudos com DOM</h1>
    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar <strong>DOM</strong> em JavaScript</p>
    <div id="msg" class="mensagem">Clique em mim</div><br>
    <script>
        // Manipulação do DOM será explicada abaixo
    </script>
</body>
</html>
```

---

## Seletores e Manipulação de Elementos

### 1. Seleção por Tag (`@`)
O seletor por **tag** é utilizado para selecionar elementos pelo nome da tag (ex.: `h1`, `p`, `div`). Ele retorna o **primeiro elemento correspondente**.

### Exemplo
Selecionando o segundo parágrafo `<p>`:
```javascript
let p1 = document.querySelector("p"); // Seleciona o primeiro <p>
console.log(p1.innerText);
p1.style.color = "grey"; // Altera a cor do texto para cinza
```

Alterando o título `<h1>`:
```javascript
let titulo = document.querySelector("h1"); // Seleciona o elemento <h1>
titulo.style.fontSize = "30px"; // Altera o tamanho da fonte
titulo.innerHTML = "DOM Manipulado com Tag!";
```

---

### 2. Seleção por ID (`#`)
O seletor por **ID** utiliza o prefixo `#` seguido do nome do ID do elemento. IDs devem ser únicos em um documento.

### Exemplo
Selecionando o elemento `<div>` com o ID `msg`:
```javascript
let d = document.querySelector("div#msg"); // Seleciona a <div> com ID "msg"
d.style.backgroundColor = "blue"; // Altera a cor de fundo para azul
d.innerHTML = "Texto alterado via ID"; // Altera o conteúdo interno
```

---

### 3. Seleção por Classe (`.`)
O seletor por **classe** utiliza o prefixo `.` seguido do nome da classe. Ele retorna o **primeiro elemento correspondente** à classe.

### Exemplo
Selecionando o mesmo `<div>` através da classe `mensagem`:
```javascript
let c = document.querySelector("div.mensagem"); // Seleciona a <div> com classe "mensagem"
c.style.color = "red"; // Altera a cor do texto para vermelho
c.innerHTML = "Texto alterado via Classe"; // Altera o conteúdo interno
```

---

### 4. Seleção por Atributo
O seletor por atributo permite selecionar elementos com base em atributos específicos, como `name`, `type`, `value`, entre outros.

### Exemplo
Selecionando elementos com atributos:
```javascript
let inputName = document.querySelector("[name='campoExemplo']"); // Seleciona o elemento com atributo name="campoExemplo"
inputName.style.border = "2px solid yellow";
```

---

### 5. Seleção por Pseudo-Classes
As pseudo-classes permitem selecionar elementos com base em estados ou posições específicas.

### Exemplos
Selecionando o **primeiro parágrafo**:
```javascript
let primeiroParagrafo = document.querySelector("p:first-of-type");
primeiroParagrafo.style.fontWeight = "bold";
```

Selecionando o **último parágrafo**:
```javascript
let ultimoParagrafo = document.querySelector("p:last-of-type");
ultimoParagrafo.style.color = "purple";
```

---

### 6. Seletores Compostos
Os seletores compostos permitem combinar diferentes critérios de seleção.

### Exemplo
Selecionando uma `<div>` com ID e classe:
```javascript
let combinado = document.querySelector("div#msg.mensagem");
combinado.style.padding = "20px";
combinado.style.backgroundColor = "green";
```

Selecionando um `<p>` dentro de uma `<div>`:
```javascript
let paragrafoNaDiv = document.querySelector("div p");
paragrafoNaDiv.innerText = "Texto modificado dentro da div!";
```

---

## Comparação entre os Seletores

| Tipo de Seletor       | Sintaxe                          | Exemplo                                | Descrição                                            |
|-----------------------|----------------------------------|----------------------------------------|----------------------------------------------------|
| Por Tag               | `querySelector("tag")`          | `document.querySelector("p")`         | Seleciona o primeiro elemento da tag especificada. |
| Por ID                | `querySelector("#id")`          | `document.querySelector("#msg")`      | Seleciona o elemento com o ID especificado.        |
| Por Classe            | `querySelector(".class")`       | `document.querySelector(".mensagem")` | Seleciona o primeiro elemento com a classe especificada. |
| Por Atributo          | `querySelector("[attr='valor']")` | `document.querySelector("[name='campo']")` | Seleciona o elemento com o atributo especificado.  |
| Pseudo-Classes        | `querySelector(":pseudo-class")` | `document.querySelector("p:first-of-type")` | Seleciona elementos com base em estados ou posições. |
| Seletores Compostos   | Combinação de critérios         | `document.querySelector("div#msg.mensagem")` | Combina seletores para refinamento.                |

---

## Exemplos Práticos Combinados

Selecionando e alterando múltiplos elementos:
```javascript
// Alterando o título
let titulo = document.querySelector("h1");
titulo.style.fontSize = "36px";
titulo.style.color = "yellow";

// Alterando o segundo parágrafo
let segundoParagrafo = document.querySelector("p:last-of-type");
segundoParagrafo.style.backgroundColor = "rgba(0,0,0,0.5)";
segundoParagrafo.innerHTML = "Texto alterado com <strong>DOM</strong>!";
```

---

## Conclusão
Os seletores do método `querySelector` são extremamente versáteis e permitem acessar elementos HTML com base em uma ampla variedade de critérios. Essa flexibilidade os torna uma ferramenta indispensável para manipular o DOM de forma eficiente.

- Use `querySelector` para selecionar um único elemento com qualquer seletor CSS.
- Use `querySelectorAll` quando precisar trabalhar com todos os elementos correspondentes a um seletor.
- Experimente combinar seletores para criar páginas dinâmicas e interativas.

Pratique a manipulação com os exemplos fornecidos e explore diferentes seletores para se tornar um especialista em DOM!
