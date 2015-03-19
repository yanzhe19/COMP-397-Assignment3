/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // submarine class
    /*Source  file  name: submarine.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
    Date  last  Modified: 2015_3_18,  Program description： This file is the submarine object file, it's the obejct of submarine(enemy),
    Revision  History : Version 2.0*/
    var Submarine = (function () {
        function Submarine(stage, game) {
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
        Submarine.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }
            if (this.image.y <= 120) {
                this.dy = Math.abs(this.dy);
            }
            this.image.y += this.dy;
        };
        Submarine.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - 100) + 100);
            this.dx = Math.floor(Math.random() * 5 + 2);
            this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
            this.image.x = this.stage.canvas.width + this.width;
        };
        Submarine.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Submarine;
    })();
    objects.Submarine = Submarine;
})(objects || (objects = {}));
//# sourceMappingURL=submarine.js.map