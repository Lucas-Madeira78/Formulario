# Formulário

Este é um exemplo de formulário proposto no desafio do curso devquest.

## Índice

- [Visão geral](#visão-geral)
   - [O desafio](#o-desafio)
   - [Captura de tela](#captura-de-tela)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-aprendi)
   - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
   - [Recursos úteis](#useful-resources)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Ver o layout ideal da página dependendo do tamanho da tela do dispositivo
- Preencherem seus dados nos campos disponiveis enquanto seus dados são validados pelo javascript.


### Links

- URL da solução: [CLIQUE AQUI](https://lucas-madeira78.github.io/Formulario/)

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Flexbox
- Validação de dados com Javascript

### O que eu aprendi

* Criar DIVs de forma semantica para ter um código organizado e fácil de ler.
* Utilizar flexbox para centralizar e flexibilizar os elementos.
* Utilizar os conceitos de DOM e documents no javascript para manipular elementos.
* Utilizar javascript para criar lógica por trás da validação dos dados.

### HTML usado para criar o formulário

```html
<form class="formulario" action="index.html" method="get">

  <input class="input nome" type="text" placeholder="Nome completo *"> <p class="required">campo obrigatório</p>
  <input class="input email" type="email" name="email" id="email" placeholder="Email *"> <p class="required">campo obrigatório</p>
  <input class="input" type="tel" name="telefone" id="telefone" placeholder="Telefone *"> <p class="required">campo obrigatório</p>
  <textarea class="input mensagem" name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Mensagem *"></textarea> <p class="required">campo obrigatório</p>
  <p class="aviso">*campos obrigatórios</p>
  <input class="botao" type="submit" value="Enviar">

</form>
```

### Desenvolvimento contínuo

Ainda espero melhorar minha aprendizagem de flexbox e a organização das tags HTML a fim de melhorar meu código e estilização, assim como me aprofundar na linguagem Javascript e tornar meus projetos mais dinâmicos.

### Recursos úteis

- [Font Awesome](https://fontawesome.com) - Me ajudou a encontrar e estilizar de forma prática os ícones que desejei.
