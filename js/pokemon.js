class Pokemon {
    constructor(gameScreen, hp, imgSrc) {
        this.gameScreen = gameScreen;
        this.width = 5;
        this.height = 10;
        this.left = Math.random() * ((79 - this.width) - 22) + 22;
        this.top = Math.random() * ((96.5 - this.height) - 15) + 15;
        this.hp = hp

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
}


