window.onload = function () {
    const startButton = document.querySelector("#start-button");
    let game;
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      console.log("start game");
      game = new Game();
      game.start();
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