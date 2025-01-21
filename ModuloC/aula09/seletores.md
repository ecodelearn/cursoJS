# Seletores em JavaScript

## Introdução
Os **seletores do DOM** são ferramentas que nos permitem acessar e manipular elementos HTML. Em JavaScript, existem vários métodos para selecionar elementos com base em diferentes critérios, como marca (tag), ID, nome, classe e seletores CSS. Esses métodos são essenciais para interagir com o DOM e criar páginas dinâmicas e interativas.

Neste arquivo, exploraremos os principais tipos de seletores com exemplos detalhados.

---

## Seleção por Marca (Tag)
O método `getElementsByTagName()` é usado para selecionar elementos pelo nome da tag. Ele retorna uma **HTMLCollection**, que é uma lista dinâmica de elementos.

### Exemplo
```javascript
const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos); // Retorna todos os elementos <p> do documento

// Iterando pelos parágrafos
for (let i = 0; i < paragrafos.length; i++) {
  console.log(paragrafos[i].textContent);
}
```

---

## Seleção por ID
O método `getElementById()` retorna **um único elemento** com o ID especificado. IDs são únicos no documento, portanto, sempre será retornado apenas um elemento.

### Exemplo
```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título";
titulo.style.color = "blue";
console.log(titulo);
```

HTML de exemplo:
```html
<h1 id="titulo">Título Original</h1>
```

---

## Seleção por Nome
O método `getElementsByName()` seleciona elementos pelo atributo `name`. É comumente usado em formulários para manipular campos com o mesmo nome.

### Exemplo
```javascript
const campos = document.getElementsByName("campoExemplo");
console.log(campos);

// Alterando o valor de todos os campos
campos.forEach(campo => {
  campo.value = "Novo valor";
});
```

HTML de exemplo:
```html
<input type="text" name="campoExemplo" value="Original">
<input type="text" name="campoExemplo" value="Outro Valor">
```

---

## Seleção por Classe
O método `getElementsByClassName()` retorna uma lista de todos os elementos com a classe especificada. Ele também retorna uma **HTMLCollection**.

### Exemplo
```javascript
const botoes = document.getElementsByClassName("btn");
console.log(botoes);

// Alterando o texto de todos os botões
for (let botao of botoes) {
  botao.textContent = "Clique Aqui!";
}
```

HTML de exemplo:
```html
<button class="btn">Botão 1</button>
<button class="btn">Botão 2</button>
```

---

## Seleção por Seletor CSS
O método `querySelector()` retorna o **primeiro elemento** que corresponde ao seletor CSS especificado, enquanto o `querySelectorAll()` retorna **todos os elementos correspondentes** em uma **NodeList**.

### Exemplo com `querySelector`
```javascript
const primeiroParagrafo = document.querySelector("p");
primeiroParagrafo.style.fontWeight = "bold";
console.log(primeiroParagrafo);
```

### Exemplo com `querySelectorAll`
```javascript
const todosParagrafos = document.querySelectorAll("p");
todosParagrafos.forEach(paragrafo => {
  paragrafo.style.color = "red";
});
```

HTML de exemplo:
```html
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>
```

---

## Comparação entre os Seletores

| Método                   | Retorno                 | Exemplo de Uso               |
|--------------------------|-------------------------|------------------------------|
| `getElementsByTagName()` | HTMLCollection         | `document.getElementsByTagName("p")` |
| `getElementById()`       | Element                | `document.getElementById("idExemplo")` |
| `getElementsByName()`    | NodeList (atributo `name`) | `document.getElementsByName("nameExemplo")` |
| `getElementsByClassName()` | HTMLCollection       | `document.getElementsByClassName("classeExemplo")` |
| `querySelector()`        | Primeiro Elemento      | `document.querySelector(".classeExemplo")` |
| `querySelectorAll()`     | NodeList               | `document.querySelectorAll(".classeExemplo")` |

---

## Conclusão
Os métodos de seleção do DOM são ferramentas poderosas que permitem acessar e manipular qualquer elemento HTML em um documento. Escolher o método correto depende do contexto e da estrutura do documento.

- Use `getElementById()` para elementos únicos com IDs.
- Use `getElementsByClassName()` ou `querySelectorAll()` para listas de elementos.
- Prefira `querySelector()` ou `querySelectorAll()` para maior flexibilidade, especialmente ao trabalhar com seletores complexos.

Pratique esses métodos para dominar a interação com o DOM e criar páginas web mais dinâmicas!
