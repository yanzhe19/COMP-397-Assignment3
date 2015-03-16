module states {
    // Instruction State
    export function instructionState() {
        ocean.update();
    }

    //scene variables
    export var backBtn: objects.Button;

    //event listerner for back button clicked in instruction page
    export function goBackBtnClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    //instruction scene
    export function instructionScene() {
        var instructionsLabel: objects.Label;

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

}