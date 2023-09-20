class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");

        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}%`;
        this.element.style.top = `${this.top}%`;
        this.element.style.width = `${this.width}%`;
        this.element.style.height = `${this.height}%`;
        this.element.style.background = "transparent";

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 22) {
            this.left = 22;
          }

          if (this.top < 15) {
            this.top = 15;
          }
      
          if (this.left > (79 - this.width)) {
            this.left = (79 - this.width);
          }
      
          if (this.top > (96.5 - this.height)) {
            this.top = (96.5 - this.height);
          }
        
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}%`;
        this.element.style.top = `${this.top}%`;
    }

    didCollidePokemon(pokemon) {
        const playerRect = this.element.getBoundingClientRect();
        const pokemonRect = pokemon.element.getBoundingClientRect();

        if(
            playerRect.left < pokemonRect.right &&
            playerRect.right > pokemonRect.left &&
            playerRect.top < pokemonRect.bottom &&
            playerRect.bottom > pokemonRect.top
        ) {
            return true;
        }
        else {
            return false;
        }
    }
}