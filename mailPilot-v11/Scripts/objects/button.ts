/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />

    /*Source  file  name: button.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
    Date  last  Modified: 2015_3_18,  Program description： This file is the button object file, it's the obejct which defines all buttons in the game,
    Revision  History : Version 2.0*/
module objects {
    export class Button extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 