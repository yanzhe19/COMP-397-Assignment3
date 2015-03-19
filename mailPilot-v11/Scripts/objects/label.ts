/// <reference path="../constants.ts" />

    /*Source  file  name: label.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
    Date  last  Modified: 2015_3_18,  Program description： This file is the label object file, it's the obejct which defines all labels in the game,
    Revision  History : Version 2.0*/
module objects {
    export class Label extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
} 