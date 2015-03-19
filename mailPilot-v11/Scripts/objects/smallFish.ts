/// <reference path="../managers/asset.ts" />
module objects {
    // small fish Class
    /*Source  file  name: smallFish.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
    Date  last  Modified: 2015_3_18,  Program description： This file is the smallFish object file, it's the obejct of small fish(bonus point),
    Revision  History : Version 2.0*/
    export class SmallFish {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        dy: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "smallFish");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;            

            game.addChild(this.image);
        }

        update() {
            if (this.image.x < (- this.width)) {
                this.reset();
            }

            if (this.image.y <= 120) {
                this.dy = Math.abs(this.dy);
            }

            this.image.x -= this.dx;
            this.image.y += this.dy;
        }

        reset() {
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - 120) + 120);
            this.image.x = this.stage.canvas.width + this.width;

            this.dy = Math.floor(Math.random() * -2) + Math.floor(Math.random() * 2);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}