/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionBtnClicked(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    export function menuState() {
        sea.update();
        plane.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "MAIL PILOT");
        game.addChild(gameNameLabel);

        // Display Instruction Button
        instructionBtn = new objects.Button(stage.canvas.width / 2, 230, "btnInstruction");
        game.addChild(instructionBtn);
        instructionBtn.addEventListener("click", instructionBtnClicked);

        // Display Play game Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "btnPlay");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 