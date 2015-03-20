/// <reference path="../managers/asset.ts" />
    // Sea Class
    /*Source  file  name: sea.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
    Date  last  Modified: 2015_3_18,  Program description： This file is the sea background object file, it's the obejct of the whole game background,
    Revision  History : Version 2.0*/
module objects {
    export class Sea {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("sea"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 3;

            game.addChild(this.image);
        }

        update() {
            this.image.x += this.dx;
            if (this.image.x >= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.x = -638;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}