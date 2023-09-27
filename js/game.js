class Game {
    constructor(name, image) {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.mainScreen = document.querySelector("#mapa");
        this.gameEndScreen = document.querySelector("#game-end");
        this.livesUpdate = document.querySelector("#lives");
        this.scoreUpdate = document.querySelector("#score");
        this.catchUpdate = document.querySelector("#catch");
        this.highScore = document.querySelector("#highScore");
        this.yourScore = document.querySelector("#yourScore");
        this.minUni = document.querySelector("#minUni");
        this.minDec = document.querySelector("#minDec");
        this.secUni = document.querySelector("#secUni");
        this.secDec = document.querySelector("#secDec");
        this.printArray = document.querySelector("#arrPrint");
        this.pop = document.querySelector("#popup");
        this.player = new Player(
            this.mainScreen,
            50,
            50,
            3,
            5,
            name,
            image,);
        this.height = 80;
        this.width = 60;
        this.counter = 0;
        this.pokemon = [new Pokemon(this.mainScreen, arr[this.counter].hp, arr[this.counter].imgSrc)];
        this.teamRocket = new Rocket(this.mainScreen);
        this.score = 0;
        this.lives = 3;
        this.catch = 0;
        this.gameIsOver = false;
        this.interval = undefined;
        this.chrono = 120;
        this.minutes = 0;
        this.seconds = 0;
    }
    
    
    start(arenapick) {
        this.mainScreen.style.height = `${this.height}vh`;
        this.mainScreen.style.width = `${this.width}%`;
        this.mainScreen.style.backgroundImage = arenapick;
        
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';

        this.gameLoop();
        this.game1();
    }

    gameLoop() {
        if (this.gameIsOver){
            return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
    
    game1(){
        this.scheduleChrono();
        this.scheduleNewPokemonCreation();
        this.scheduleNewRocketCreation();
    }
    
    
    scheduleNewPokemonCreation(interval) {
        this.interval = setInterval (() => {
            this.pokemon[0].element.remove();
            this.pokemon.splice(0, 1);
            this.pokemon.push(new Pokemon(this.mainScreen, arr[this.counter + 1].hp, arr[this.counter + 1].imgSrc));
            this.counter++;
            if(this.counter === (arr.length - 1)){
                clearInterval(this.interval);
            }
        }, 5000);
    }
    
    update(){
        this.player.move();
        if(this.lives === 0 || this.counter === (arr.length) || this.chrono === 0){
            this.gameIsOver = true;
            this.endGame();
        }
        
        if(this.counter < (arr.length - 1) && this.pokemon[0] && this.player.didCollidePokemon(this.pokemon[0])) {
            this.score += this.pokemon[0].hp;
            images.push({name: arr[this.counter].name, hp: arr[this.counter].hp, imgSrc: arr[this.counter].imgSrc, 
                no: arr[this.counter].no, type: arr[this.counter].type, height: arr[this.counter].height, weight: arr[this.counter].weight});
            this.pokemon[0].element.remove();
            this.pokemon.splice(0, 1)
            this.pokemon.push(new Pokemon(this.mainScreen, arr[this.counter + 1].hp, arr[this.counter + 1].imgSrc));
            this.counter++;
            this.catch++;
            this.scoreUpdate.innerText = this.score;
            this.catchUpdate.innerText = this.catch;
            console.log(images);
            if(this.counter === (arr.length - 1)) {
                clearInterval(this.interval);
            }
        }
        
        if (this.teamRocket && this.player.didCollidePokemon(this.teamRocket)) {
            this.teamRocket.element.remove();
            this.teamRocket = new Rocket(this.mainScreen);
            this.lives--;
            this.livesUpdate.innerText = this.lives;
        }
        
        if (this.counter === (arr.length - 1)){
            if(this.pokemon[0] && this.player.didCollidePokemon(this.pokemon[0])) {
                this.score += this.pokemon[0].hp;
                this.pokemon[0].element.remove();
                this.pokemon.splice(0, 1)
                this.scoreUpdate.innerText = this.score;
            }
            setTimeout(() => {
                this.counter++
                
            }, 5000)
        }
        
}


shuffleCards(array) {
    array.sort(() => Math.random - 0.5);
}

scheduleNewRocketCreation(interval) {
    if(this.gameIsOver === true){
        return;
    }
    else{
        setInterval (() => {
            this.teamRocket.element.remove();
            this.teamRocket = new Rocket(this.mainScreen);
        }, 4000);
    }
}

scheduleChrono(interval) {
    setInterval (() => {
        this.chrono--
        this.minutes = Math.floor(this.chrono / 60);
        this.seconds = Math.floor(this.chrono % 60);
        this.minUni.innerText = this.computeTwoDigitNumber(this.minutes)[0];
        this.minDec.innerText = this.computeTwoDigitNumber(this.minutes)[1];
        this.secUni.innerText = this.computeTwoDigitNumber(this.seconds)[0];
        this.secDec.innerText = this.computeTwoDigitNumber(this.seconds)[1];
        if(this.chrono === 0){
            clearInterval(this.interval);
        }
    }, 1000);
}

getMinutes() {
    let minutes = 0
    minutes = Math.floor(this.chrono / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = 0
    seconds = Math.floor(this.chrono % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString();
    }
    else {
      return value.toString();
    }
  }


endGame() {
    this.gameIsOver = true;
    
    const oldHighScore = localStorage.getItem("highScore");
    if (this.score > oldHighScore) {
        localStorage.setItem("highScore", this.score);
        this.highScore.innerText = this.score;
        this.yourScore.innerText = this.score
    } 
    else {
        this.highScore.innerText = oldHighScore;
        this.yourScore.innerText = this.score
    }
    
           
             
        for (let i = 0; i < images.length; i++) {
            var img = document.createElement('img');
            var para = document.createElement("div");
            para.className = 'popup'
            img.src = images[i].imgSrc;
            this.printArray.appendChild(img);
            img.addEventListener('click', function(){
                document.body.appendChild(para);
                para.innerHTML = `<img class="popupimg" src=${images[i].imgSrc} alt="">
                <p class="cima"><span class="titles" id="oitenta">Name</span><span class="titles1" id="oitenta">${images[i].name}</span></p>
                <div class="lado">
                <span class="cima" id="ladofirst"><span class="titles">No.</span><span class="titles1">${images[i].no}</span></span>
                <span class="cima" id="ladosecond"><span class="titles">HP</span><span class="titles1">${images[i].hp}</span></span>
                </div>
                <p class="cima"><span class="titles" id="oitenta">Type</span><span class="titles1" id="oitenta">${images[i].type}</span></p>
                <div class="lado">
                <span class="cima" id="ladofirst"><span class="titles">Height</span><span class="titles1">${images[i].height}</span></span>
                <span class="cima" id="ladosecond"><span class="titles">Weight</span><span class="titles1">${images[i].weight}</span></span>
                </div>`
                let newcloseButton = document.createElement('button');
                let newContent = document.createTextNode('X');
                newcloseButton.appendChild(newContent);
                newcloseButton.id='btnclose';
                para.appendChild(newcloseButton);
                document.body.appendChild(para).appendChild(newcloseButton);
                newcloseButton.onclick = function(){
                para.parentElement.removeChild(para);
                }
            });
        }
            

    this.gameScreen.style.display = 'none';
    this.gameEndScreen.style.display = 'flex';
}


hide() {
	document.body.removeChild(para);
}

}

const images = [];

const arr = [
    {name: "Bulbasaur",
    hp: 45,
    imgSrc: "./images/poke/1sem.png",
    no: "#001",
    type: "Grass, Poison",
    height: "0.7m",
    weight: "6.9kg"},
    {name: "Ivysaur",
    hp: 60,
    imgSrc: "./images/poke/2.png",
    no: "#002",
    type: "Grass, Poison",
    height: "1m",
    weight: "13kg"},
    {name: "Venusaur",
    hp: 80,
    imgSrc: "./images/poke/3.png",
    no: "#003",
    type: "Grass, Poison",
    height: "2m",
    weight: "100kg"},
    {name: "Charmander",
    hp: 39,
    imgSrc: "./images/poke/4.png",
    no: "#004",
    type: "Fire",
    height: "0.6m",
    weight: "8.5kg"},
    {name: "Charmeleon",
    hp: 58,
    imgSrc: "./images/poke/5.png",
    no: "#005",
    type: "Fire",
    height: "1.1m",
    weight: "19kg"},
    {name: "Charizard",
    hp: 78,
    imgSrc: "./images/poke/6.png",
    no: "#006",
    type: "Fire, Flying",
    height: "1.7m",
    weight: "90.5kg"},
    {name: "Squirtle",
    hp: 44,
    imgSrc: "./images/poke/7.png",
    no: "#007",
    type: "Water",
    height: "0.5m",
    weight: "9kg"},
    {name: "Wartortle",
    hp: 59,
    imgSrc: "./images/poke/8.png",
    no: "#008",
    type: "Water",
    height: "1m",
    weight: "22.5kg"},
    {name: "Blastoise",
    hp: 79,
    imgSrc: "./images/poke/9.png",
    no: "#009",
    type: "Water",
    height: "1.6m",
    weight: "85.5kg"},
    {name: "Caterpie",
    hp: 45,
    imgSrc: "./images/poke/10.png",
    no: "#010",
    type: "Bug",
    height: "0.3m",
    weight: "2.9kg"},
    {name: "Metapod",
    hp: 50,
    imgSrc: "./images/poke/11.png",
    no: "#011",
    type: "Bug",
    height: "0.7m",
    weight: "9.9kg"},
    {name: "Butterfree",
    hp: 60,
    imgSrc: "./images/poke/12.png",
    no: "#012",
    type: "Bug, Flying",
    height: "1.1m",
    weight: "32kg"},
    {name: "Weedle",
    hp: 40,
    imgSrc: "./images/poke/13.png",
    no: "#013",
    type: "Bug, Poison",
    height: "0.3m",
    weight: "3.2kg"},
    {name: "Kakuna",
    hp: 45,
    imgSrc: "./images/poke/14.png",
    no: "#014",
    type: "Bug, Poison",
    height: "0.6m",
    weight: "10kg"},
    {name: "Beedrill",
    hp: 65,
    imgSrc: "./images/poke/15.png",
    no: "#015",
    type: "Bug, Poison",
    height: "1m",
    weight: "29.5kg"},
    {name: "Pidgey",
    hp: 40,
    imgSrc: "./images/poke/16.png",
    no: "#016",
    type: "Normal, Flying",
    height: "0.3m",
    weight: "1.8kg"},
    {name: "Pidgeotto",
    hp: 63,
    imgSrc: "./images/poke/17.png",
    no: "#017",
    type: "Normal, Flying",
    height: "1.1m",
    weight: "30kg"},
    {name: "Pidgeot",
    hp: 83,
    imgSrc: "./images/poke/18.png",
    no: "#018",
    type: "Normal, Flying",
    height: "1.5m",
    weight: "39.5kg"},
    {name: "Rattata",
    hp: 30,
    imgSrc: "./images/poke/19.png",
    no: "#019",
    type: "Normal",
    height: "0.3m",
    weight: "3.5kg"},
    {name: "Raticate",
    hp: 55,
    imgSrc: "./images/poke/20.png",
    no: "#020",
    type: "Normal",
    height: "0.7m",
    weight: "18.5kg"},
    {name: "Spearow",
    hp: 40,
    imgSrc: "./images/poke/21.png",
    no: "#021",
    type: "Normal, Flying",
    height: "0.3m",
    weight: "2kg"},
    {name: "Fearow",
    hp: 65,
    imgSrc: "./images/poke/22.png",
    no: "#022",
    type: "Normal, Flying",
    height: "1.2m",
    weight: "38kg"},
    {name: "Ekans",
    hp: 35,
    imgSrc: "./images/poke/23.png",
    no: "#023",
    type: "Poison",
    height: "2m",
    weight: "6.9kg"},
    {name: "Arbok",
    hp: 60,
    imgSrc: "./images/poke/24.png",
    no: "#024",
    type: "Poison",
    height: "3.5m",
    weight: "65kg"},
    {name: "Pikachu",
    hp: 35,
    imgSrc: "./images/poke/25.png",
    no: "#025",
    type: "Eletric",
    height: "0.4m",
    weight: "6kg"},
    {name: "Raichu",
    hp: 60,
    imgSrc: "./images/poke/26.png",
    no: "#026",
    type: "Eletric",
    height: "0.8m",
    weight: "30kg"},
    {name: "Sandshrew",
    hp: 50,
    imgSrc: "./images/poke/27.png",
    no: "#027",
    type: "Ground",
    height: "0.6m",
    weight: "12kg"},
    {name: "Sandslash",
    hp: 75,
    imgSrc: "./images/poke/28.png",
    no: "#028",
    type: "Ground",
    height: "1m",
    weight: "29.5kg"},
    {name: "Nidoran♀",
    hp: 55,
    imgSrc: "./images/poke/29.png",
    no: "#029",
    type: "Poison",
    height: "0.4m",
    weight: "7kg"},
    {name: "Nidorina",
    hp: 70,
    imgSrc: "./images/poke/30.png",
    no: "#030",
    type: "Poison",
    height: "0.8m",
    weight: "20kg"},
    {name: "Nidoqueen",
    hp: 90,
    imgSrc: "./images/poke/31.png",
    no: "#031",
    type: "Poison, Ground",
    height: "1.3m",
    weight: "60kg"},
    {name: "Nidoran♂",
    hp: 46,
    imgSrc: "./images/poke/32.png",
    no: "#032",
    type: "Poison",
    height: "0.5m",
    weight: "9kg"},
    {name: "Nidorino",
    hp: 61,
    imgSrc: "./images/poke/33.png",
    no: "#033",
    type: "Poison",
    height: "0.9m",
    weight: "19.5kg"},
    {name: "Nidoking",
    hp: 81,
    imgSrc: "./images/poke/34.png",
    no: "#034",
    type: "Poison, Ground",
    height: "1.4m",
    weight: "62kg"},
    {name: "Clefairy",
    hp: 70,
    imgSrc: "./images/poke/35.png",
    no: "#035",
    type: "Normal",
    height: "0.6m",
    weight: "7.5kg"},
    {name: "Clefable",
    hp: 95,
    imgSrc: "./images/poke/36.png",
    no: "#036",
    type: "Normal",
    height: "1.3m",
    weight: "40kg"},
    {name: "Vulpix",
    hp: 38,
    imgSrc: "./images/poke/37.png",
    no: "#037",
    type: "Fire",
    height: "0.6m",
    weight: "9.9kg"},
    {name: "Ninetales",
    hp: 73,
    imgSrc: "./images/poke/38.png",
    no: "#038",
    type: "Fire",
    height: "1.1m",
    weight: "19.9kg"},
    {name: "Jigglypuff",
    hp: 115,
    imgSrc: "./images/poke/39.png",
    no: "#039",
    type: "Normal",
    height: "0.5m",
    weight: "5.5kg"},
    {name: "Wigglytuff",
    hp: 140,
    imgSrc: "./images/poke/40.png",
    no: "#040",
    type: "Normal",
    height: "1m",
    weight: "12kg"},
    {name: "Zubat",
    hp: 40,
    imgSrc: "./images/poke/41.png",
    no: "#041",
    type: "Poison, Flying",
    height: "0.8m",
    weight: "7.5kg"},
    {name: "Golbat",
    hp: 75,
    imgSrc: "./images/poke/42.png",
    no: "#042",
    type: "Poison, Flying",
    height: "1.6m",
    weight: "55kg"},
    {name: "Oddish",
    hp: 45,
    imgSrc: "./images/poke/43.png",
    no: "#043",
    type: "Grass, Poison",
    height: "0.5m",
    weight: "5.4kg"},
    {name: "Gloom",
    hp: 60,
    imgSrc: "./images/poke/44.png",
    no: "#044",
    type: "Grass, Poison",
    height: "0.8m",
    weight: "8.6kg"},
    {name: "Vileplume",
    hp: 75,
    imgSrc: "./images/poke/45.png",
    no: "#045",
    type: "Grass, Poison",
    height: "1.2m",
    weight: "18.6kg"},
    {name: "Paras",
    hp: 35,
    imgSrc: "./images/poke/46.png",
    no: "#046",
    type: "Bug, Grass",
    height: "0.3m",
    weight: "5.4kg"},
    {name: "Parasect",
    hp: 60,
    imgSrc: "./images/poke/47.png",
    no: "#047",
    type: "Bug, Grass",
    height: "1m",
    weight: "29.5kg"},
    {name: "Venonat",
    hp: 60,
    imgSrc: "./images/poke/48.png",
    no: "#048",
    type: "Bug, Poison",
    height: "1m",
    weight: "30kg"},
    {name: "Venomoth",
    hp: 70,
    imgSrc: "./images/poke/49.png",
    no: "#049",
    type: "Bug, Poison",
    height: "1.5m",
    weight: "12.5kg"},
    {name: "Diglett",
    hp: 10,
    imgSrc: "./images/poke/50.png",
    no: "#050",
    type: "Ground",
    height: "0.2m",
    weight: "0.8kg"},
    {name: "Dugtrio",
    hp: 35,
    imgSrc: "./images/poke/51.png",
    no: "#051",
    type: "Ground",
    height: "0.7m",
    weight: "33.3kg"},
    {name: "Meowth",
    hp: 40,
    imgSrc: "./images/poke/52.png",
    no: "#052",
    type: "Normal",
    height: "0.4m",
    weight: "4.2kg"},
    {name: "Persian",
    hp: 65,
    imgSrc: "./images/poke/53.png",
    no: "#053",
    type: "Normal",
    height: "1m",
    weight: "32kg"},
    {name: "Psyduck",
    hp: 50,
    imgSrc: "./images/poke/54.png",
    no: "#054",
    type: "Water",
    height: "0.8m",
    weight: "19.6kg"},
    {name: "Golduck",
    hp: 80,
    imgSrc: "./images/poke/55.png",
    no: "#055",
    type: "Water",
    height: "1.7m",
    weight: "76.6kg"},
    {name: "Mankey",
    hp: 40,
    imgSrc: "./images/poke/56.png",
    no: "#056",
    type: "Fight",
    height: "0.5m",
    weight: "28kg"},
    {name: "Primeape",
    hp: 65,
    imgSrc: "./images/poke/57.png",
    no: "#057",
    type: "Fight",
    height: "1m",
    weight: "32kg"},
    {name: "Growlithe",
    hp: 55,
    imgSrc: "./images/poke/58.png",
    no: "#058",
    type: "Fire",
    height: "0.7m",
    weight: "19kg"},
    {name: "Arcanine",
    hp: 90,
    imgSrc: "./images/poke/59.png",
    no: "#059",
    type: "Fire",
    height: "1.9m",
    weight: "155kg"},
    {name: "Poliwag",
    hp: 40,
    imgSrc: "./images/poke/60.png",
    no: "#060",
    type: "Water",
    height: "0.6m",
    weight: "12.4kg"},
    {name: "Poliwhirl",
    hp: 65,
    imgSrc: "./images/poke/61.png",
    no: "#061",
    type: "Water",
    height: "1m",
    weight: "20kg"},
    {name: "Poliwrath",
    hp: 90,
    imgSrc: "./images/poke/62.png",
    no: "#062",
    type: "Water, Fight",
    height: "1.3m",
    weight: "54kg"},
    {name: "Abra",
    hp: 25,
    imgSrc: "./images/poke/63.png",
    no: "#063",
    type: "Psychic",
    height: "0.9m",
    weight: "19.5kg"},
    {name: "Kadabra",
    hp: 40,
    imgSrc: "./images/poke/64.png",
    no: "#064",
    type: "Psychic",
    height: "1.3m",
    weight: "56.5kg"},
    {name: "Alakazam",
    hp: 55,
    imgSrc: "./images/poke/65.png",
    no: "#065",
    type: "Psychic",
    height: "1.5m",
    weight: "48kg"},
    {name: "Machop",
    hp: 70,
    imgSrc: "./images/poke/66.png",
    no: "#066",
    type: "Fight",
    height: "0.8m",
    weight: "19.5kg"},
    {name: "Machoke",
    hp: 80,
    imgSrc: "./images/poke/67.png",
    no: "#067",
    type: "Fight",
    height: "1.5m",
    weight: "70.5kg"},
    {name: "Machamp",
    hp: 90,
    imgSrc: "./images/poke/68.png",
    no: "#068",
    type: "Fight",
    height: "1.6m",
    weight: "130kg"},
    {name: "Bellsprout",
    hp: 50,
    imgSrc: "./images/poke/69.png",
    no: "#069",
    type: "Grass, Poison",
    height: "0.7m",
    weight: "4kg"},
    {name: "Weepinbell",
    hp: 65,
    imgSrc: "./images/poke/70.png",
    no: "#070",
    type: "Grass, Poison",
    height: "1m",
    weight: "6.4kg"},
    {name: "Victreebel",
    hp: 80,
    imgSrc: "./images/poke/71.png",
    no: "#071",
    type: "Grass, Poison",
    height: "1.7m",
    weight: "15.5kg"},
    {name: "Tentacool",
    hp: 40,
    imgSrc: "./images/poke/72.png",
    no: "#072",
    type: "Water, Poison",
    height: "0.9m",
    weight: "45.5kg"},
    {name: "Tentacruel",
    hp: 80,
    imgSrc: "./images/poke/73.png",
    no: "#073",
    type: "Water, Poison",
    height: "1.6m",
    weight: "55kg"},
    {name: "Geodude",
    hp: 40,
    imgSrc: "./images/poke/74.png",
    no: "#074",
    type: "Rock, Ground",
    height: "0.4m",
    weight: "20kg"},
    {name: "Graveler",
    hp: 55,
    imgSrc: "./images/poke/75.png",
    no: "#075",
    type: "Rock, Ground",
    height: "1m",
    weight: "105kg"},
    {name: "Golem",
    hp: 80,
    imgSrc: "./images/poke/76.png",
    no: "#076",
    type: "Rock, Ground",
    height: "1.4m",
    weight: "300kg"},
    {name: "Ponyta",
    hp: 50,
    imgSrc: "./images/poke/77.png",
    no: "#077",
    type: "Fire",
    height: "1m",
    weight: "30kg"},
    {name: "Rapidash",
    hp: 65,
    imgSrc: "./images/poke/78.png",
    no: "#078",
    type: "Fire",
    height: "1.7m",
    weight: "95kg"},
    {name: "Slowpoke",
    hp: 90,
    imgSrc: "./images/poke/79.png",
    no: "#079",
    type: "Water, Psychic",
    height: "1.2m",
    weight: "36kg"},
    {name: "Slowbro",
    hp: 95,
    imgSrc: "./images/poke/80.png",
    no: "#080",
    type: "Water, Psychic",
    height: "1.6m",
    weight: "78.5kg"},
    {name: "Magnemite",
    hp: 25,
    imgSrc: "./images/poke/81.png",
    no: "#081",
    type: "Eletric",
    height: "0.3m",
    weight: "6kg"},
    {name: "Magneton",
    hp: 50,
    imgSrc: "./images/poke/82.png",
    no: "#082",
    type: "Eletric",
    height: "1m",
    weight: "60kg"},
    {name: "Farfetch'd",
    hp: 52,
    imgSrc: "./images/poke/83.png",
    no: "#083",
    type: "Normal, Flying",
    height: "0.8m",
    weight: "15kg"},
    {name: "Doduo",
    hp: 35,
    imgSrc: "./images/poke/84.png",
    no: "#084",
    type: "Normal, Flying",
    height: "1.4m",
    weight: "39.2kg"},
    {name: "Dodrio",
    hp: 60,
    imgSrc: "./images/poke/85.png",
    no: "#085",
    type: "Normal, Flying",
    height: "1.8m",
    weight: "85.2kg"},
    {name: "Seel",
    hp: 65,
    imgSrc: "./images/poke/86.png",
    no: "#086",
    type: "Water",
    height: "1.1m",
    weight: "90kg"},
    {name: "Dewgong",
    hp: 90,
    imgSrc: "./images/poke/87.png",
    no: "#087",
    type: "Water, Ice",
    height: "1.7m",
    weight: "120kg"},
    {name: "Grimer",
    hp: 80,
    imgSrc: "./images/poke/88.png",
    no: "#088",
    type: "Poison",
    height: "0.9m",
    weight: "30kg"},
    {name: "Muk",
    hp: 105,
    imgSrc: "./images/poke/89.png",
    no: "#089",
    type: "Poison",
    height: "1.2m",
    weight: "30kg"},
    {name: "Shellder",
    hp: 30,
    imgSrc: "./images/poke/90.png",
    no: "#090",
    type: "Water",
    height: "0.3m",
    weight: "4kg"},
    {name: "Cloyster",
    hp: 50,
    imgSrc: "./images/poke/91.png",
    no: "#091",
    type: "Water, Ice",
    height: "1.5m",
    weight: "132.5kg"},
    {name: "Gastly",
    hp: 30,
    imgSrc: "./images/poke/92.png",
    no: "#092",
    type: "Ghost, Poison",
    height: "1.3m",
    weight: "0.1kg"},
    {name: "Haunter",
    hp: 45,
    imgSrc: "./images/poke/93.png",
    no: "#093",
    type: "Ghost, Poison",
    height: "1.6m",
    weight: "0.1kg"},
    {name: "Gengar",
    hp: 60,
    imgSrc: "./images/poke/94.png",
    no: "#094",
    type: "Ghost, Poison",
    height: "1.5m",
    weight: "40.5kg"},
    {name: "Onix",
    hp: 35,
    imgSrc: "./images/poke/95.png",
    no: "#095",
    type: "Rock, Ground",
    height: "8.8m",
    weight: "210kg"},
    {name: "Drowzee",
    hp: 60,
    imgSrc: "./images/poke/96.png",
    no: "#096",
    type: "Psychic",
    height: "1m",
    weight: "32.4kg"},
    {name: "Hypno",
    hp: 85,
    imgSrc: "./images/poke/97.png",
    no: "#097",
    type: "Psychic",
    height: "1.6m",
    weight: "75.6kg"},
    {name: "Krabby",
    hp: 30,
    imgSrc: "./images/poke/98.png",
    no: "#098",
    type: "Water",
    height: "0.4m",
    weight: "6.5kg"},
    {name: "Kingler",
    hp: 55,
    imgSrc: "./images/poke/99.png",
    no: "#099",
    type: "Water",
    height: "1.3m",
    weight: "60kg"},
    {name: "Voltorb",
    hp: 40,
    imgSrc: "./images/poke/100.png",
    no: "#100",
    type: "Eletric",
    height: "0.5m",
    weight: "10.4kg"},
    {name: "Electrode",
    hp: 60,
    imgSrc: "./images/poke/101.png",
    no: "#101",
    type: "Electric",
    height: "1.82",
    weight: "66.6kg"},
    {name: "Exeggcute",
    hp: 60,
    imgSrc: "./images/poke/102.png",
    no: "#102",
    type: "Grass, Psychic",
    height: "0.4m",
    weight: "2.5kg"},
    {name: "Exeggutor",
    hp: 95,
    imgSrc: "./images/poke/103.png",
    no: "#103",
    type: "Grass, Psychic",
    height: "2m",
    weight: "120kg"},
    {name: "Cubone",
    hp: 50,
    imgSrc: "./images/poke/104.png",
    no: "#104",
    type: "Ground",
    height: "0.4m",
    weight: "6.5kg"},
    {name: "Marowak",
    hp: 60,
    imgSrc: "./images/poke/105.png",
    no: "#105",
    type: "Ground",
    height: "1m",
    weight: "45kg"},
    {name: "Hitmonlee",
    hp: 50,
    imgSrc: "./images/poke/106.png",
    no: "#106",
    type: "Fight",
    height: "1.5m",
    weight: "49.8kg"},
    {name: "Hitmonchan",
    hp: 50,
    imgSrc: "./images/poke/107.png",
    no: "#107",
    type: "Fight",
    height: "1.4m",
    weight: "50.2kg"},
    {name: "Lickitung",
    hp: 90,
    imgSrc: "./images/poke/108.png",
    no: "#108",
    type: "Normal",
    height: "1.2m",
    weight: "65.5kg"},
    {name: "Koffing",
    hp: 40,
    imgSrc: "./images/poke/109.png",
    no: "#109",
    type: "Poison",
    height: "0.6m",
    weight: "1kg"},
    {name: "Weezing",
    hp: 65,
    imgSrc: "./images/poke/110.png",
    no: "#100",
    type: "Poison",
    height: "1.2m",
    weight: "9.5kg"},
    {name: "Rhyhorn",
    hp: 80,
    imgSrc: "./images/poke/111.png",
    no: "#111",
    type: "Ground, Rock",
    height: "1m",
    weight: "115kg"},
    {name: "Rhydon",
    hp: 105,
    imgSrc: "./images/poke/112.png",
    no: "#112",
    type: "Ground, Rock",
    height: "1.9m",
    weight: "120kg"},
    {name: "Chansey",
    hp: 250,
    imgSrc: "./images/poke/113.png",
    no: "#113",
    type: "Normal",
    height: "1.1m",
    weight: "34.6kg"},
    {name: "Tangela",
    hp: 65,
    imgSrc: "./images/poke/114.png",
    no: "#114",
    type: "Grass",
    height: "1m",
    weight: "35kg"},
    {name: "Kangaskhan",
    hp: 105,
    imgSrc: "./images/poke/115.png",
    no: "#115",
    type: "Normal",
    height: "2.2m",
    weight: "80kg"},
    {name: "Horsea",
    hp: 30,
    imgSrc: "./images/poke/116.png",
    no: "#116",
    type: "Water",
    height: "0.4m",
    weight: "8kg"},
    {name: "Seadra",
    hp: 55,
    imgSrc: "./images/poke/117.png",
    no: "#117",
    type: "Water",
    height: "1.2m",
    weight: "25kg"},
    {name: "Goldeen",
    hp: 45,
    imgSrc: "./images/poke/118.png",
    no: "#118",
    type: "Water",
    height: "0.6m",
    weight: "15kg"},
    {name: "Seaking",
    hp: 80,
    imgSrc: "./images/poke/119.png",
    no: "#119",
    type: "Water",
    height: "1.3",
    weight: "39kg"},
    {name: "Staryu",
    hp: 30,
    imgSrc: "./images/poke/120.png",
    no: "#120",
    type: "Water",
    height: "0.8m",
    weight: "34.5kg"},
    {name: "Starmie",
    hp: 60,
    imgSrc: "./images/poke/121.png",
    no: "#121",
    type: "Water, Psychic",
    height: "1.1m",
    weight: "80kg"},
    {name: "Mr. Mime",
    hp: 40,
    imgSrc: "./images/poke/122.png",
    no: "#122",
    type: "Psychic",
    height: "1.3m",
    weight: "54.5kg"},
    {name: "Scyther",
    hp: 70,
    imgSrc: "./images/poke/123.png",
    no: "#123",
    type: "Bug, Flying",
    height: "1.5m",
    weight: "56kg"},
    {name: "Jynx",
    hp: 65,
    imgSrc: "./images/poke/124.png",
    no: "#124",
    type: "Ice, Psychic",
    height: "1.4m",
    weight: "40.6kg"},
    {name: "Electabuzz",
    hp: 65,
    imgSrc: "./images/poke/125.png",
    no: "#125",
    type: "Electric",
    height: "1.1m",
    weight: "30kg"},
    {name: "Magmar",
    hp: 65,
    imgSrc: "./images/poke/126.png",
    no: "#126",
    type: "Fire",
    height: "1.3m",
    weight: "44.5kg"},
    {name: "Pinsir",
    hp: 65,
    imgSrc: "./images/poke/127.png",
    no: "#127",
    type: "Bug",
    height: "1.5m",
    weight: "55kg"},
    {name: "Tauros",
    hp: 75,
    imgSrc: "./images/poke/128.png",
    no: "#128",
    type: "Normal",
    height: "1.4m",
    weight: "88.4kg"},
    {name: "Magikarp",
    hp: 20,
    imgSrc: "./images/poke/129.png",
    no: "#129",
    type: "Water",
    height: "0.9m",
    weight: "10kg"},
    {name: "Gyarados",
    hp: 95,
    imgSrc: "./images/poke/130.png",
    no: "#130",
    type: "Water, Flying",
    height: "6.5m",
    weight: "235kg"},
    {name: "Lapras",
    hp: 130,
    imgSrc: "./images/poke/131.png",
    no: "#131",
    type: "Water, Ice",
    height: "2.5m",
    weight: "220kg"},
]    
