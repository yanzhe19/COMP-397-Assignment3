/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private fish: objects.Fish;
        private smallFish: objects.SmallFish;
        private submarines = [];
        private scoreboard: objects.Scoreboard;

        constructor(fish: objects.Fish, smallFish: objects.SmallFish, submarines, scoreboard: objects.Scoreboard) {
            this.fish = fish;
            this.smallFish = smallFish;
            this.submarines = submarines;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between fish and any submarine object
        private fishAndSubmarine(submarine: objects.Submarine) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = submarine.image.x;
            p2.y = submarine.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (submarine.height / 2))) {
                createjs.Sound.play("explode");
                this.scoreboard.lives -= 1;
                submarine.reset();
            }
        }

        // check collision between fish and smallFish
        private fishAndSmallfish() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = this.smallFish.image.x;
            p2.y = this.smallFish.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (this.smallFish.height / 2))) {
                createjs.Sound.play("pickup");
                this.scoreboard.score += 100;
                this.smallFish.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
                this.fishAndSubmarine(this.submarines[count]);
            }
            this.fishAndSmallfish();
        }
    }
} 