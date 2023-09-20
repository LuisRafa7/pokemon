class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.mainScreen = document.querySelector("#mapa");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(
            this.mainScreen,
            50,
            50,
            3,
            5,
            "./images/pokeball.png");;
        this.height = 80;
        this.width = 60;
        this.pokemon = [];
        this.teamRocket = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start() {
        this.mainScreen.style.height = `${this.height}vh`;
        this.mainScreen.style.width = `${this.width}%`;

        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';

        this.gameLoop();
        //this.newPokemon();
    }

    gameLoop() {
        if (this.gameIsOver){
            return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
    
    newPokemon() {
        this.pokemon.push(new Pokemon(this.mainScreen));
        console.log(this.pokemon);
        setTimeout(() => {
            for (let i = 0; i < this.pokemon.length; i++) {
                const pokemon = this.pokemon[i];
                pokemon.element.remove();
            this.pokemon.splice(0, 1);
            console.log(this.pokemon);
    }}, 5000);
    }
    


    seeTheCollision(pokemon) {
        let collision = false;
        if(this.player.didCollidePokemon(pokemon)) {
            pokemon.element.remove();
            this.pokemon.splice(0, 1);
            collision = true;    
        }    
        return collision;
    }

    update(){
        this.player.move();

        
        if (Math.random() > 0.98 && this.pokemon.length < 1) {
            this.pokemon.push(new Pokemon(this.mainScreen));
            
            const pokemon = this.pokemon[0];
            console.log(pokemon);

            this.seeTheCollision();
            
                setTimeout(() => {
                     pokemon.element.remove();
                    this.pokemon.splice(0, 1);
                     console.log(this.pokemon);
                     }, 3000);


            //for (let i = 0; i < this.pokemon.length; i++) {
              //  const pokemon = this.pokemon[i];
                
                //setTimeout(() => {
               // pokemon.element.remove();
               //this.pokemon.splice(0, 1);
               // console.log(this.pokemon);
               // }, 3000);
            //}
          //}
        
        //if(this.pokemon.length === 1) {
          //  this.pokemon.splice(0,1);
        //}

    }

}
}
