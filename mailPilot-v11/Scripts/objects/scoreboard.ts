﻿    // Scoreboard Class
    /*Source  file  name: scoreboard.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
    Date  last  Modified: 2015_3_18,  Program description： This file is the scoreboard object file, it's the obejct shows player's current score,
    Revision  History : Version 2.0*/
module objects {
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.lives = constants.PLANE_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }

        update() {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelText;
        }

        destroy() {
            game.removeChild(this.label);
        }
    }
} 