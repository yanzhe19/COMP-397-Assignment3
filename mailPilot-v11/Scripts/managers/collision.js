/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/*Source  file  name: collision.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This file check if two objects are collide (fish&submarine, fish&smallFish), if collide, the corresponding action will taken(point or life increase/decrease and game over)
Revision  History : Version 2.0*/
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(fish, smallFish, submarines, scoreboard) {
            this.submarines = [];
            this.fish = fish;
            this.smallFish = smallFish;
            this.submarines = submarines;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between fish and any submarine object
        Collision.prototype.fishAndSubmarine = function (submarine) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = submarine.image.x;
            p2.y = submarine.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (submarine.height / 2))) {
                createjs.Sound.play("explode");
                this.scoreboard.lives -= 1;
                submarine.reset();
            }
        };
        // check collision between fish and smallFish
        Collision.prototype.fishAndSmallfish = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = this.smallFish.image.x;
            p2.y = this.smallFish.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (this.smallFish.height / 2))) {
                createjs.Sound.play("pickup");
                this.scoreboard.score += 100;
                this.smallFish.reset();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
                this.fishAndSubmarine(this.submarines[count]);
            }
            this.fishAndSmallfish();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map