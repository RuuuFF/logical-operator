var attempt = 0, hits = 0;

function gameStart() {
  var game = document
    .querySelector("#game");
  var hitsEl = document
    .querySelector("#hits");
  var attemptEl = document
    .querySelector("#attempt");

  var points = Math
    .ceil(Math.random() * 100);
  console.log(points);

  attempt++;
  attemptEl.innerHTML = attempt;

  if ((points >= 40) && (points <= 50) || (points >= 90) && (points <= 100)) {
    game.innerHTML = "🎁<br><span>" + points + "</span>";

    hits++;
    hitsEl.innerHTML = "<span class='hits'>" + hits + "</span>";
  } else {
    game.innerHTML = "💥<br><span>" + points + "</span>";
  }
}
// Comentários sobre o código no repositório de estudos/cfbcursos/aula 08.