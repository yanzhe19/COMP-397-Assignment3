var states;
(function (states) {
    // Instruction State
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
        game = new createjs.Container();
        sea = new objects.Sea(stage, game);
        // Show Cursor
        stage.cursor = "default";
        //define instruction string
        instructionsStringArray = [
            "This is the Big Fish game, ",
            "you can use your mouse to move the fish",
            "If you eat one small fish, you win points",
            "If you collide with submarine, you lose one life",
            "you have three life in total",
            "Have Fun!"
        ];
        for (var line = 0; line < instructionsStringArray.length; line++) {
            actualInstructionsLine[line] = new createjs.Text(instructionsStringArray[line], "32px Dock51", "#A8EA1F");
            actualInstructionsLine[line].x = stage.canvas.width * 0.05;
            actualInstructionsLine[line].y = 20 + (40 * line);
            game.addChild(actualInstructionsLine[line]);
            console.log(actualInstructionsLine[line]);
        }
        // Display Go Back Button
        goBackBtn = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(goBackBtn);
        goBackBtn.addEventListener("click", goBackBtnClicked);
        stage.addChild(game);
    }
    states.instructionScene = instructionScene;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map