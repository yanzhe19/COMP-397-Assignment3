var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "sea", src: "assets/images/sea.jpg" },
        { id: "explode", src: "assets/sounds/explosion.wav" },
        { id: "pickup", src: "assets/sounds/pickup.wav" },
        { id: "oceanSound", src: "assets/sounds/ocean.mp3" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        //"images": ["assets/images/atlas.png"],
        //"frames": [
        //    [2, 2, 226, 178],
        //    [230, 2, 211, 69],
        //    [443, 69, 62, 63],
        //    [443, 2, 65, 65],
        //    [230, 73, 211, 69],
        //    [230, 144, 211, 69]
        //],
        //"animations": {
        //    "cloud": [0],
        //    "instructionsButton": [1],
        //    "island": [2],
        //    "plane": [3],
        //    "playButton": [4],
        //    "tryAgainButton": [5]
        //}
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 200, 100],
            [204, 2, 200, 100],
            [2, 104, 200, 100],
            [204, 104, 200, 100],
            [2, 305, 120, 82],
            [124, 305, 70, 63],
            [2, 206, 150, 97]
        ],
        "animations": {
            "btnBack": [0],
            "btnInstruction": [1],
            "btnPlay": [2],
            "btnTryAgain": [3],
            "fish": [4],
            "smallFish": [5],
            "submarine": [6]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map