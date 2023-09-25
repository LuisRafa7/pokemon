class Rocket {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 10;
        this.height = 15;
        this.left = Math.random() * ((79 - this.width) - 22) + 22;
        this.top = Math.random() * ((96.5 - this.height) - 15) + 15;
        this.element = document.createElement("img");

        this.element.src = "./images/rocket.png";
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}%`;
        this.element.style.top = `${this.top}%`;
        this.element.style.width = `${this.width}%`;
        this.element.style.height = `${this.height}%`;
        this.element.style.background = "transparent";

        this.gameScreen.appendChild(this.element);
    }
}
