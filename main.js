// AND "&&" retorna verdadeiro se ambos os operandos forem verdadeiro; senão, retorna falso.
// OR "||" retorna verdadeiro se qualquer dos operandos for verdadeiro; se ambos são falso, retorna falso.



// Declarando o número de tentativas e acertos. Precisa ficar fora da função para que fique salvo a cada tentativa e não reinicie a função a cada vez que o botão é pressionado.
var attempt = 0,
  hits = 0;


function gameStart() {
  // Pegando os elementos onde será exibido os resultados.
  var game = document
    .querySelector("#game");
  var hitsEl = document
    .querySelector("#hits");
  var attemptEl = document
    .querySelector("#attempt");


  // Gerando um número aleatório entre 0 e 100.
  var pontos = Math
    .ceil(Math.random() * 100);
  // Exibe o número random no console.
  console.log(pontos);


  // Incrementa o número de tentativas a cada vez que a função é chamada.
  attempt++;
  // Atualiza o número de tentativas no documento HTML.
  attemptEl.innerHTML = attempt;


  // Vamos chamar "(pontos >= 40) && (pontos <= 50)" de bloco 1, "(pontos >= 90) && (pontos <= 100)" de bloco 2 e "&&" de "E".

  // No bloco 1, se "pontos" for maior ou igual 40 E "pontos" menor ou igual 50, ele retorna verdadeiro.

  // No bloco 2, se "pontos" for maior ou igual 90 E "pontos" menor ou igual 100, ele retorna verdadeiro.

  // O operador OR "||" verifica se algum dos blocos é verdadeiro.
  if ((pontos >= 40) && (pontos <= 50) || (pontos >= 90) && (pontos <= 100)) {
    // Indicador de que ganhou no documento HTMl.
    game.innerHTML = "🎁<br><span>" + pontos + "</span>";

    // Incrementa o número de acertos.
    hits++;
    // Atualiza o número de acertos no documento HTML.
    hitsEl.innerHTML = "<span class='hits'>" + hits + "</span>";
  } else {
    // Indicador de que perdeu no documento HTML.
    game.innerHTML = "💥<br><span>" + pontos + "</span>";

    // Caso queira um número de erros sendo atualizado, o código virá aqui
  }
}