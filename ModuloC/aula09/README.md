# Módulo C: Entendendo a Árvore DOM

## Introdução
O **Document Object Model (DOM)** é a representação hierárquica de um documento HTML ou XML. Ele organiza os elementos de uma página web em uma estrutura de árvore, onde cada nó representa uma parte do documento, como elementos HTML, atributos ou texto.

A imagem apresentada exemplifica a hierarquia da árvore DOM para o documento HTML fornecido. Abaixo, exploraremos cada nível dessa estrutura e o papel de seus elementos.

## A Hierarquia da Árvore DOM

### 1. `window`
O **objeto raiz do DOM** é o `window`. Ele representa a janela do navegador e é a camada mais alta da hierarquia. Dentro do `window`, temos diversos objetos como:
- `location`: Representa a URL atual da página.
- `document`: Representa o conteúdo do documento HTML.
- `history`: Permite manipular o histórico de navegação.

### 2. `document`
O `document` é o principal ponto de entrada para acessar e manipular a estrutura do DOM. Ele contém todo o conteúdo da página HTML, incluindo os elementos `html`, `head` e `body`.

### 3. Elemento `<html>`
O elemento `<html>` é o nó raiz de todos os elementos HTML do documento. Ele contém dois filhos principais:
- `<head>`: Contém informações sobre o documento, como metadados e configurações.
- `<body>`: Contém o conteúdo visível da página.

## Estrutura Interna

### Elementos do `<head>`
O `<head>` geralmente inclui metadados e configurações globais para o documento. No exemplo fornecido:
- `<meta charset="UTF-8">`: Define a codificação de caracteres como UTF-8.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Garante que a página seja responsiva.
- `<title>`: Define o título da página exibido na aba do navegador.
- `<style>`: Contém regras CSS para estilizar o documento. Exemplo:
  ```css
  body {
      background-color: black;
      color: white;
      font: normal 20pt Arial;
      text-align: center;
  }
  ```

### Elementos do `<body>`
O `<body>` contém os elementos visíveis da página e segue a estrutura da árvore DOM:
- `<h1>`: Um cabeçalho de nível 1 com o texto **"Iniciando estudos com DOM"**.
- Primeiro `<p>`: Um parágrafo simples com o texto **"Aqui vai o resultado"**.
- Segundo `<p>`: Um parágrafo com um elemento `<strong>` interno, usado para destacar o texto **"DOM"**.
- `<div>`: Um contêiner com o texto **"Clique em mim"**.

## Relação Hierárquica dos Elementos

### Estrutura em Forma de Árvore
Com base no exemplo HTML, a árvore DOM do documento seria representada assim:
```
window
└── document
    └── html
        ├── head
        │   ├── meta
        │   ├── meta
        │   ├── title
        │   └── style
        └── body
            ├── h1
            ├── p
            ├── p
            │   └── strong
            └── div
```

## Explicação dos Elementos na Prática

1. **Elemento `<h1>`**
   - Representa o título principal da página.
   - Exibido com maior destaque visual.

2. **Parágrafos `<p>`**
   - Cada parágrafo (`<p>`) é um nó filho direto do `<body>`.
   - O segundo parágrafo contém um elemento `<strong>` para dar ênfase ao texto **"DOM"**.

3. **Elemento `<div>`**
   - Serve como um contêiner genérico para agrupar conteúdo ou interações.
   - No exemplo, o texto **"Clique em mim"** pode ser manipulado ou estilizado usando JavaScript.

4. **Scripts `<script>`**
   - Localizados no final do `<body>`, permitem adicionar comportamento dinâmico à página usando JavaScript.

## Código HTML do Exemplo
Aqui está o código completo do exemplo usado na explicação:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeiros passos com DOM</title>
    <style>
        body {
            background-color: black;
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
    <div>Clique em mim</div>
    <script>
        // JavaScript vai aqui
    </script>
</body>
</html>
```

## Conclusão
A árvore DOM organiza todos os elementos do documento HTML de forma hierárquica, tornando possível acessar e manipular cada nó de maneira eficiente. Compreender essa estrutura é essencial para interagir com páginas web usando JavaScript.

No próximo passo, exploraremos como manipular elementos dessa hierarquia para criar páginas dinâmicas e interativas.
