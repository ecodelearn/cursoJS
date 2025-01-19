# Módulo C: Entendendo o DOM (Document Object Model)

## Introdução
O **Document Object Model (DOM)** é uma interface de programação que permite acessar e manipular documentos HTML e XML como uma estrutura de objetos em árvore. Ele é essencial para criar páginas web dinâmicas e interativas usando JavaScript.

Este módulo é focado em ensinar como acessar, manipular e interagir com elementos do DOM, construindo uma base sólida para o desenvolvimento de aplicações modernas.

## Objetivos
- Compreender a estrutura do DOM e como ele representa documentos HTML.
- Aprender a acessar elementos do DOM com JavaScript.
- Manipular conteúdo, atributos e estilos dos elementos.
- Adicionar, remover e modificar elementos na árvore DOM.
- Trabalhar com eventos para criar interatividade.

## Estrutura Básica do DOM
O DOM organiza os elementos HTML em uma estrutura de árvore de nós. Por exemplo, o seguinte documento HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo DOM</title>
  </head>
  <body>
    <h1 id="titulo">Bem-vindo ao DOM</h1>
    <p class="descricao">Este é um parágrafo de exemplo.</p>
    <button id="botao">Clique aqui</button>
  </body>
</html>
```

Será representado no DOM como:
```
document
├── html
│   ├── head
│   │   └── title
│   └── body
│       ├── h1
│       ├── p
│       └── button
```

## Métodos Comuns para Selecionar Elementos
Acessar elementos do DOM é o primeiro passo para manipulá-los. Aqui estão os métodos mais usados:

### 1. Seleção por ID
```javascript
const titulo = document.getElementById("titulo");
console.log(titulo.textContent);
```

### 2. Seleção por Classe
```javascript
const paragrafos = document.getElementsByClassName("descricao");
console.log(paragrafos[0].textContent);
```

### 3. Seleção por Tag
```javascript
const botoes = document.getElementsByTagName("button");
console.log(botoes[0].textContent);
```

### 4. Seleção por Seletor (mais flexível)
```javascript
const titulo = document.querySelector("#titulo");
const paragrafos = document.querySelectorAll(".descricao");
```

## Manipulação de Elementos
Depois de selecionar os elementos, você pode modificar seus conteúdos, estilos e atributos.

### Modificando o Conteúdo
```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título Dinâmico";
```

### Alterando Estilos
```javascript
titulo.style.color = "blue";
titulo.style.fontSize = "24px";
```

### Adicionando Elementos
```javascript
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um novo parágrafo.";
document.body.appendChild(novoParagrafo);
```

### Removendo Elementos
```javascript
const botao = document.getElementById("botao");
botao.remove();
```

## Trabalhando com Eventos
Os eventos permitem que sua página web responda a interações do usuário.

### Evento de Clique
```javascript
const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  alert("Botão clicado!");
});
```

### Evento de Mouse
```javascript
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "red";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.color = "black";
});
```

## Desafios do Módulo
1. **Modificar Conteúdo**: Crie um botão que altera o texto de um elemento `<h1>` ao ser clicado.
2. **Adicionar Elementos Dinamicamente**: Crie uma lista `<ul>` onde cada clique em um botão adiciona um novo item.
3. **Estilização com Interatividade**: Altere a cor de fundo de um parágrafo ao passar o mouse sobre ele.

## Conclusão
Entender o DOM é fundamental para criar páginas web interativas e dinâmicas. Este módulo fornece uma base sólida para manipular elementos do DOM, permitindo criar experiências ricas e responsivas para os usuários.

Vamos começar a explorar o DOM e suas possibilidades!
