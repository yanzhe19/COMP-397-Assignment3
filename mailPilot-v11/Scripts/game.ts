﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/submarine.ts" />
/// <reference path="objects/smallFish.ts" />
/// <reference path="objects/sea.ts" />
/// <reference path="objects/fish.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/gameover.ts" />

// Big Fish Version 2.0

//+++++++++++++++++++++++++++++++++++++++++++variable section++++++++++++++++++++++++++++++++
//stage and game container
var stage: createjs.Stage;
var game: createjs.Container;


var sea: objects.Sea;
var fish: objects.Fish;
var smallFish: objects.SmallFish;
var submarines = []; // submarine array;
var scoreboard: objects.Scoreboard;

//collision variables
var collision: managers.Collision;

//Buttons needed for the big fish game
var tryAgain: objects.Button;
var playButton: objects.Button;
var instructionBtn: objects.Button;
var goBackBtn: objects.Button;

//state variables
var currentState: number;
var currentStateFunction;
//+++++++++++++++++++++++++++++++++++++++++++END of variable section++++++++++++++++++++++++++++++++


// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

//function to change game state
function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;

        case constants.INSTRUCTION_STATE:
            currentStateFunction = states.instructionState;
            // instantiate instruction screen
            states.instructionScene();
            break;
    }
}





