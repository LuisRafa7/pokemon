window.onload = function () {
    const startButton = document.querySelector("#start-button");
    const restartButton = document.querySelector("#restart-button");
    const cPokeball = document.querySelector("#cPokeball");
    const cArena = document.querySelector("#cArena");
    let game;
    let chose = 0;
    let namePoke = "Greatball";
    let imagePoke = "./images/pokeballs/greatball.png";
    let arena = "url(./images/arenas/normal.webp)"

  
    startButton.addEventListener("click", function () {
      shuffle();
      startGame();
      console.log(game.player);
      if(game.player.name === "Pokeball"){
        chose = 0
      }
      else if(game.player.name === "Greatball"){
        chose = 1
      }
      else if(game.player.name === "Ultraball"){
        chose = 2
      }
      else if(game.player.name === "Masterball"){
        chose = 3
      };
      console.log(chose);
    });

    restartButton.addEventListener('click', function(){
    window.location.reload();
    return false;
    });

    cPokeball.addEventListener('click', function(){
      let choosePoke = document.createElement("div");
      choosePoke.className = 'popuppoke'
      document.body.appendChild(choosePoke);
          choosePoke.innerHTML = `<h1 class="titlepoke">Choose your PokéBall</h1>
          <div id="separate">
          <span class="slofast">Slower</span><span class="slofast">Faster</span>
          </div>
          <div class="pokes">
            <img id="pokeb" src="./images/pokeballs/pokeball.png" alt="">
            <img id="greatb" src="./images/pokeballs/greatball.png" alt="">
            <img id="ultrab" src="./images/pokeballs/ultraball.png" alt="">
            <img id="masterb" src="./images/pokeballs/masterball.png" alt="">
          </div>
          <div id="separate">
          <button class="buttonpopup" id="defaultpoke">Default</button>
          <button class="buttonpopup" id="buttonc">OK</button>
          </div>`;
          
          const pokeb = document.querySelector("#pokeb");
            pokeb.onclick = function() {
              namePoke = "Pokeball";
              imagePoke = "./images/pokeballs/pokeball.png";
              pokeb.style.border = "5px solid #f1c304";
              greatb.style.border = "none";
              ultrab.style.border = "none";
              masterb.style.border = "none";
            };

          const greatb = document.querySelector("#greatb");
            greatb.onclick = function() {
              namePoke = "Greatball";
              imagePoke = "./images/pokeballs/greatball.png";
              pokeb.style.border = "none";
              greatb.style.border = "5px solid #f1c304";
              ultrab.style.border = "none";
              masterb.style.border = "none";
            };

          const ultrab = document.querySelector("#ultrab");
            ultrab.onclick = function() {
              namePoke = "Ultraball";
              imagePoke = "./images/pokeballs/ultraball.png";
              pokeb.style.border = "none";
              greatb.style.border = "none";
              ultrab.style.border = "5px solid #f1c304";
              masterb.style.border = "none";
            };

          const masterb = document.querySelector("#masterb");
            masterb.onclick = function() {
              namePoke = "Masterball";
              imagePoke = "./images/pokeballs/masterball.png";
              pokeb.style.border = "none";
              greatb.style.border = "none";
              ultrab.style.border = "none";
              masterb.style.border = "5px solid #f1c304";
            };

          const defaultpoke = document.querySelector("#defaultpoke");
          defaultpoke.onclick = function() {
            namePoke = "Greatball";
            imagePoke = "./images/pokeballs/greatball.png";
            pokeb.style.border = "none";
            greatb.style.border = "5px solid #f1c304";
            ultrab.style.border = "none";
            masterb.style.border = "none";
            };

          const buttonc = document.querySelector("#buttonc");
            buttonc.onclick = function(){
            choosePoke.parentElement.removeChild(choosePoke);
            };
    })

    cArena.addEventListener('click', function(){
      let chooseArena = document.createElement("div");
      chooseArena.className = 'popuparena'
      document.body.appendChild(chooseArena);
          chooseArena.innerHTML = `<h1 class="titlepoke">Choose your Arena</h1>
          <div class="arenas">
            <h3 id="bug">Bug</h3>
            <h3 id="dark">Dark</h3>
            <h3 id="dragon">Dragon</h3>
            <h3 id="electric">Electric</h3>
            <h3 id="fairy">Fairy</h3>
            <h3 id="fighting">Fighting</h3>
            <h3 id="fire">Fire</h3>
            <h3 id="flying">Flying</h3>
            <h3 id="ghost">Ghost</h3>
            <h3 id="grass">Grass</h3>
            <h3 id="ground">Ground</h3>
            <h3 id="ice">Ice</h3>
            <h3 id="normal">Normal</h3>
            <h3 id="poison">Poison</h3>
            <h3 id="psychic">Psychic</h3>
            <h3 id="rock">Rock</h3>
            <h3 id="steel">Steel</h3>
            <h3 id="water">Water</h3>
          </div>
          <div id="separate">
          <button class="buttonpopup" id="defaultarena">Default</button>
          <img src=arena alt="">
          <button class="buttonpopup" id="buttond">OK</button>
          </div>`;

          const bug = document.querySelector("#bug");
            bug.onclick = function() {
              arena = "url(./images/arenas/bug.webp)"
              bug.style.border = "5px solid #f1c304";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const dark = document.querySelector("#dark");
            dark.onclick = function() {
              arena = "url(./images/arenas/dark.webp)"
              bug.style.border = "none";
              dark.style.border = "5px solid #f1c304";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const dragon = document.querySelector("#dragon");
            dragon.onclick = function() {
              arena = "url(./images/arenas/dragon.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "5px solid #f1c304";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const electric = document.querySelector("#electric");
            electric.onclick = function() {
              arena = "url(./images/arenas/electric.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "5px solid #f1c304";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const fairy = document.querySelector("#fairy");
            fairy.onclick = function() {
              arena = "url(./images/arenas/fairy.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "5px solid #f1c304";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const fighting = document.querySelector("#fighting");
            fighting.onclick = function() {
              arena = "url(./images/arenas/Fighting.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "5px solid #f1c304";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const fire = document.querySelector("#fire");
            fire.onclick = function() {
              arena = "url(./images/arenas/fire.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "5px solid #f1c304";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const flying = document.querySelector("#flying");
            flying.onclick = function() {
              arena = "url(./images/arenas/flying.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "5px solid #f1c304";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const ghost = document.querySelector("#ghost");
            ghost.onclick = function() {
              arena = "url(./images/arenas/Ghost.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "5px solid #f1c304";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const grass = document.querySelector("#grass");
            grass.onclick = function() {
              arena = "url(./images/arenas/grass.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "5px solid #f1c304";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const ground = document.querySelector("#ground");
            ground.onclick = function() {
              arena = "url(./images/arenas/Ground.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "5px solid #f1c304";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const ice = document.querySelector("#ice");
            ice.onclick = function() {
              arena = "url(./images/arenas/Ice.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "5px solid #f1c304";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const normal = document.querySelector("#normal");
            normal.onclick = function() {
              arena = "url(./images/arenas/normal.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "5px solid #f1c304";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const poison = document.querySelector("#poison");
            poison.onclick = function() {
              arena = "url(./images/arenas/Poison.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "5px solid #f1c304";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const psychic = document.querySelector("#psychic");
            psychic.onclick = function() {
              arena = "url(./images/arenas/psychic.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "5px solid #f1c304";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const rock = document.querySelector("#rock");
            rock.onclick = function() {
              arena = "url(./images/arenas/rock.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "5px solid #f1c304";
              steel.style.border = "none";
              water.style.border = "none";
            };

            const steel = document.querySelector("#steel");
            steel.onclick = function() {
              arena = "url(./images/arenas/steel.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "5px solid #f1c304";
              water.style.border = "none";
            };

            const water = document.querySelector("#water");
            water.onclick = function() {
              arena = "url(./images/arenas/water.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "none";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "5px solid #f1c304";
            };

            const defaultarena = document.querySelector("#defaultarena");
            defaultarena.onclick = function() {
              arena = "url(./images/arenas/normal.webp)"
              bug.style.border = "none";
              dark.style.border = "none";
              dragon.style.border = "none";
              electric.style.border = "none";
              fairy.style.border = "none";
              fighting.style.border = "none";
              fire.style.border = "none";
              flying.style.border = "none";
              ghost.style.border = "none";
              grass.style.border = "none";
              ground.style.border = "none";
              ice.style.border = "none";
              normal.style.border = "5px solid #f1c304";
              poison.style.border = "none";
              psychic.style.border = "none";
              rock.style.border = "none";
              steel.style.border = "none";
              water.style.border = "none";
            };


            const buttond = document.querySelector("#buttond");
            buttond.onclick = function(){
            chooseArena.parentElement.removeChild(chooseArena);
            };
    })


    function shuffle() {
        arr.sort(() => Math.random() - 0.5);
    }

    function startGame() {
      console.log("start game");
      game = new Game(namePoke, imagePoke);
      game.start(arena);
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
              if(chose === 0){
                game.player.directionX = -0.1;
              }
              else if(chose === 1){
                game.player.directionX = -0.4;
              }
              else if(chose === 2){
                game.player.directionX = -0.7;
              }
              else if(chose === 3){
                game.player.directionX = -1;
              }
              break;
            case "ArrowUp":
              if(chose === 0){
                game.player.directionY = -0.1;
              }
              else if(chose === 1){
                game.player.directionY = -0.4;
              }
              else if(chose === 2){
                game.player.directionY = -0.7;
              }
              else if(chose === 3){
                game.player.directionY = -1;
              }
              break;
            case "ArrowRight":
              if(chose === 0){
                game.player.directionX = 0.1;
              }
              else if(chose === 1){
                game.player.directionX = 0.4;
              }
              else if(chose === 2){
                game.player.directionX = 0.7;
              }
              else if(chose === 3){
                game.player.directionX = 1;
              }
              break;
            case "ArrowDown":
              if(chose === 0){
                game.player.directionY = 0.1;
              }
              else if(chose === 1){
                game.player.directionY = 0.4;
              }
              else if(chose === 2){
                game.player.directionY = 0.7;
              }
              else if(chose === 3){
                game.player.directionY = 1;
              }
              break;
          }
        }
      }



      

        window.addEventListener("keydown", handleKeydown);

}