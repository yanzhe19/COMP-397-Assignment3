/// <reference path="../managers/asset.ts" />
module objects {
    // submarine class
    export class Submarine {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "submarine");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            // console.log(this.width,this.height);
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }

            if (this.image.y <= 120) {
                this.image.y += Math.abs(this.dy);
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - 100) + 100);
            this.dx = Math.floor(Math.random() * 5 + 2);
            this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
            this.image.x = this.stage.canvas.width + this.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}