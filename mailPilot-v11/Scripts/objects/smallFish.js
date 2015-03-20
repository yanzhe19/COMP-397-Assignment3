/// <reference path="../managers/asset.ts" />
// small fish Class
/*Source  file  name: smallFish.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This file is the smallFish object file, it's the obejct of small fish(bonus point),
Revision  History : Version 2.0*/
//this is the small fish object --> which is the object for player avatar to collect points
var objects;
(function (objects) {
    var SmallFish = (function () {
        //the constructor of small fish class
        function SmallFish(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "smallFish");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            //add the current small fish to game container
            game.addChild(this.image);
        }
        //function to update small fish class
        SmallFish.prototype.update = function () {
            //small fish move beyond scene, reset its position
            if (this.image.x < (-this.width)) {
                this.reset();
            }
            if (this.image.y <= 120) {
                this.dy = Math.abs(this.dy);
            }
            this.image.x -= this.dx;
            this.image.y += this.dy;
        };
        SmallFish.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - 120) + 120);
            this.image.x = this.stage.canvas.width + this.width;
            this.dy = Math.floor(Math.random() * -2) + Math.floor(Math.random() * 2);
            //set speed of small fish to a constant value
            this.dx = Math.floor(Math.random() * 3 + 3);
            //constants.SMALLFISH_SPEED;     
        };
        SmallFish.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return SmallFish;
    })();
    objects.SmallFish = SmallFish;
})(objects || (objects = {}));
//# sourceMappingURL=smallFish.js.map