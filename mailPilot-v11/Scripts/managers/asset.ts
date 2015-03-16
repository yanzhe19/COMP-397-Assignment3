module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "ocean", src: "assets/images/ocean.gif" },
        { id: "sea", src: "assets/images/sea.jpg" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
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
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 