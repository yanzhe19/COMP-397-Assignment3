/// <reference path="../objects/button.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />

//this is the state for playing game
module states {
    export function playState() {

// +++++++++++++++++++++++++++++Update play state scene+++++++++++++++++++++++++++++++++++
        sea.update();
        smallFish.update();
        fish.update();

        //update all submarines
        for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
            submarines[count].update();
        }

        //check collision of objects
        collision.update();
        //update the score board
        scoreboard.update();
// +++++++++++++++++++++++++++++End of Update play state scene+++++++++++++++++++++++++++++++++++

        //check if player died, if died, go to game over state
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            fish.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function, show the paly scene
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        smallFish = new objects.SmallFish(stage, game);
        fish = new objects.Fish(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
            submarines[count] = new objects.Submarine(stage, game);
            console.log(submarines[count]);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(fish, smallFish, submarines, scoreboard);

        //add game container to stage
        stage.addChild(game);
    }
}