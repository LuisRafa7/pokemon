window.onload = function () {
    const startButton = document.querySelector("#start-button");
    const restartButton = document.querySelector("#restart-button");
    const pop = document.querySelector("#popup");
    let game;
  
    startButton.addEventListener("click", function () {
      shuffle();
      startGame();
    });

    restartButton.addEventListener('click', function(){
    window.location.reload();
    return false;
    });

    //pop.addEventListener('click', function(){
      //console.log("popup");
      //});

    function shuffle() {
        arr.sort(() => Math.random() - 0.5);
    }

    function startGame() {
      console.log("start game");
      game = new Game();
      game.start();
      //game.scheduleNewPokemonCreation();
      //game.scheduleNewRocketCreation();
    }

    

    function handleKeydown(event) {
        const key = event.key;
        const possibleKey = [
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
        ];
        
        if (possibleKey.includes(key)) {
            event.preventDefault();
          switch (key) {
            case "ArrowLeft":
              game.player.directionX = -0.3;
              break;
            case "ArrowUp":
              game.player.directionY = -0.3;
              break;
            case "ArrowRight":
              game.player.directionX = 0.3;
              break;
            case "ArrowDown":
              game.player.directionY = 0.3;
              break;
          }
        }
      }
      window.addEventListener("keydown", handleKeydown);
}