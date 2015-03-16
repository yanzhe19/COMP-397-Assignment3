/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Fish = (function () {
        function Fish(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "fish");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Fish.prototype.update = function () {
            this.image.x = this.stage.mouseX;
            if (this.stage.mouseY <= 120) {
                this.image.y = 120;
            }
            else
                this.image.y = this.stage.mouseY;
        };
        Fish.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Fish;
    })();
    objects.Fish = Fish;
})(objects || (objects = {}));
//# sourceMappingURL=fish.js.map