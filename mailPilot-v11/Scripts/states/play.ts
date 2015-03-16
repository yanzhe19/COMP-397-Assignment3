﻿/// <reference path="../objects/button.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState() {
        sea.update();
        island.update();
        plane.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Submarine(stage, game);
            console.log(clouds[count]);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(plane, island, clouds, scoreboard);

        stage.addChild(game);
    }
}