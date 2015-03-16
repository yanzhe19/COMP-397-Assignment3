var states;
(function (states) {
    // Instruction State
    function instructionState() {
        ocean.update();
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
        var instructionsLabel;
        game = new createjs.Container();
        ocean = new objects.Sea(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Instruction
        instructionsLabel = new objects.Label(stage.canvas.width / 2, 40, "This is the instruction test");
        game.addChild(instructionsLabel);
        // Display Go Back Button
        goBackBtn = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(goBackBtn);
        goBackBtn.addEventListener("click", goBackBtnClicked);
        stage.addChild(game);
    }
    states.instructionScene = instructionScene;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map