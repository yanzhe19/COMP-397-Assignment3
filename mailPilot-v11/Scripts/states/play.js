/// <reference path="../objects/button.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
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
    states.playState = playState;
    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        island = new objects.SmallFish(stage, game);
        plane = new objects.Fish(stage, game);
        // Show Cursor
        stage.cursor = "none";
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
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map