import k from "./kaplayCtx";
import disclaimer from "./scenes/disclaimer";
import game from "./scenes/game";
import mainMenu from "./scenes/mainMenu";
import gameOverScene from "./scenes/gameover";

// load images
k.loadSprite("castle", "assets/Factions/Knights/Buildings/Castle/Castle_Blue.png");
k.loadSprite("ground-rock", "/assets/Terrain/Ground/Tilemap_Elevation.png");
k.loadSprite("water-still", "public/assets/Terrain/Water/Water.png");
k.loadSprite(
    "shore-water",
    "assets/Terrain/Water/Foam/Foam.png",
    {
        sliceX: 8,
        sliceY: 1,
        anims: {
            crash: {from: 0, to: 7, loop: true, speed: 30}
        }
    }
);

k.loadSpriteAtlas("/assets/Terrain/Ground/Tilemap_Elevation.png", {
  "rock-tile-1": { x: 0,  y: 0,   width: 190, height: 256 },
  "rock-tile-2": { x: 10,  y: 256,   width: 180, height: 128 },
  "rock-tile-3": { x: 0,  y: 448,   width: 193, height: 64 },
  "rock-top":    { x: 0,  y: 256, width: 32, height: 32 },
});

k.loadSpriteAtlas("assets/Terrain/Ground/Tilemap_Flat.png", {
  "grass-tile-1": { x: 20,  y: 10,   width: 160, height: 170 },
  "grass-tile-2": { x: 20, y: 256-64, width: 160, height: 50},
  "grass-tile-3": { x: 256,  y: 0, width: 64, height: 64},
  "grass-top":    { x: 0,  y: 256, width: 32, height: 32 },
});

k.loadSprite("castle-blue", "assets/Factions/Knights/Buildings/Castle/Castle_Blue.png");
k.loadSprite("tower-blue", "assets/Factions/Knights/Buildings/Tower/Tower_Blue.png");
k.loadSprite("skull-flag", "public/assets/Deco/16.png");
k.loadSprite("scare-crow", "public/assets/Deco/18.png");
k.loadSprite("pumpkin-1", "public/assets/Deco/12.png");
k.loadSprite("pumpkin-2", "public/assets/Deco/13.png");

// background 
k.loadSprite("bg-1", "public/background_set/B1010.png");
k.loadSprite("bg-2", "public/background_set/B1011-1.png");
k.loadSprite("B1011", "public/background_set/B1011-2.png"); 
k.loadSprite("B1012", "public/background_set/B1012.png"); 
k.loadSprite("B1013", "public/background_set/B1013-1.png"); 
k.loadSprite("B1013", "public/background_set/B1013-2.png"); 
k.loadSprite("B1013", "public/background_set/B1013-3.png"); 
k.loadSprite("B1013", "public/background_set/B1013-4.png"); 
k.loadSprite("B1013", "public/background_set/B1013-5.png"); 
k.loadSprite("B1013", "public/background_set/B1013-6.png"); 
k.loadSprite("C2010", "public/background_set/C2010.png"); 
k.loadSprite("C2011", "public/background_set/C2011.png"); 
k.loadSprite("C2012", "public/background_set/C2012.png"); 
k.loadSprite("C2013", "public/background_set/C2013.png"); 
k.loadSprite("M1010", "public/background_set/M1010.png");

k.loadSprite("fire", "public/assets/Effects/Fire/Fire.png",
    {
        sliceX: 7,
        sliceY: 1,
        anims: {
            fire: {from: 0, to: 6, loop: true, speed: 10}
        }
    }
)
k.loadSprite("zombie", "/assets/death-lamp.png", {
    sliceX: 11,
    sliceY: 2,
    anims: {
        "spawn": {from: 0, to: 10, loop: false, speed: 10},
        "walk": {from: 11, to: 16, loop: true, speed: 10},
        "idle": {from: 11, to: 11, loop: true, speed: 10}, 
    }
})

k.loadSprite("killer-man", "/assets/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png", {
    sliceX: 6,
    sliceY: 8,
    anims: {
        idle: {from: 0, to: 5, loop: true, speed: 20},
        attack_left: {from: 10, to: 17, loop: false, speed: 40}
    }
});

// princess sprite
k.loadSprite("princess", "public/player-princess.png", {
    sliceX: 39,
    sliceY: 2,
    anims:{
        idle : {from: 0, to: 36, loop: true, speed: 40},
        die: {from: 37, to: 51, loop: false, speed: 10},
        jump: {from: 52, to: 71, loop: false, speed: 20}
    }
});


// Load fonts 
k.loadFont("mania", "fonts/mania.ttf");

// load scenes
k.scene("disclaimer", disclaimer);
k.scene("main-menu", mainMenu);
k.scene("game", game);
k.scene("gameover", gameOverScene);

k.go("disclaimer");