/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    //This is the menu state

    //event listener when play button of menu screen clicked
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        fish.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    //event listener when instruction button of menu screen clicked
    export function instructionBtnClicked(event: MouseEvent) {
        stage.removeChild(game);
        fish.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    //menu state function, updates for menu states
    export function menuState() {
        sea.update();
        fish.update();
    }

    //create the menu state scene
    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        fish = new objects.Fish(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Big Fish!");
        game.addChild(gameNameLabel);

        // Display Instruction Button
        instructionBtn = new objects.Button(stage.canvas.width / 2, 230, "btnInstruction");
        game.addChild(instructionBtn);
        instructionBtn.addEventListener("click", instructionBtnClicked);

        // Display Play game Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "btnPlay");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        //add game container to the stage
        stage.addChild(game);
    }
} 