var states;
(function (states) {
    // This is the Instruction State
    function instructionState() {
        sea.update();
    }
    states.instructionState = instructionState;
    //scene variables
    states.backBtn;
    //event listerner for back button clicked in instruction page
    function goBackBtnClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.goBackBtnClicked = goBackBtnClicked;
    //instruction scene
    function instructionScene() {
        var actualInstructionsLine = [];
        var instructionsStringArray = [];
        //game container
        game = new createjs.Container();
        //the sea in the background
        sea = new objects.Sea(stage, game);
        // Show Cursor
        stage.cursor = "default";
        //define instruction string
        instructionsStringArray = [
            "This is the Big Fish game, ",
            "you can use your mouse to move the fish",
            "If you eat one small fish, you win points",
            "Win as much points as possible!",
            "",
            "However, if you collide with submarine, ",
            "you lose one life, you have three lives in total",
            "Have Fun!"
        ];
        for (var line = 0; line < instructionsStringArray.length; line++) {
            actualInstructionsLine[line] = new createjs.Text(instructionsStringArray[line], "32px Dock51", "#A8EA1F");
            actualInstructionsLine[line].x = stage.canvas.width * 0.05;
            actualInstructionsLine[line].y = 20 + (40 * line);
            //add instruction to game container
            game.addChild(actualInstructionsLine[line]);
        }
        // Display Play game Button
        playButton = new objects.Button(stage.canvas.width * 3 / 4, 400, "btnPlay");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);
        // Display Go Back Button
        goBackBtn = new objects.Button(stage.canvas.width / 4, 400, "btnBack");
        game.addChild(goBackBtn);
        goBackBtn.addEventListener("click", goBackBtnClicked);
        //add game container to stage
        stage.addChild(game);
    }
    states.instructionScene = instructionScene;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map