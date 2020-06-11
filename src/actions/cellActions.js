import Display from "../display";

class cellActions{
    constructor(activeCell){
        this.activeCell=activeCell;
        this.display = new Display(activeCell);
        this.voidCell = document.getElementsByClassName('void')[0];
    }
    clickHandler(){
        this.checkPosition()?this.moveCell():this.errorCell();
    }
    moveCell(){
        this.display.cellMotion(this.checkPosition())
        .then(()=>{
            const newVoidId = this.activeCell.id;
            this.activeCell.id = this.voidCell.id;
            this.activeCell.removeAttribute('style');
            this.voidCell.id = newVoidId;
        })
    }
    errorCell(){
        const err = document.createElement('div');
        err.setAttribute('class','field__cell__inside-error');
        this.activeCell.prepend(err);
        this.display.cellErrorAnimation(err)
        .then(()=>{
            err.remove();
        })
    }
    checkPosition(){
        let action='';
        if(this.voidCell.id[1]===this.activeCell.id[1]){
            action = 
            this.voidCell.id[3]===Number(this.activeCell.id[3])-1+""?"up":
            this.voidCell.id[3]===Number(this.activeCell.id[3])+1+""?"down":
            null;
        }else
        if(this.voidCell.id[3]===this.activeCell.id[3]){
            action = 
            this.voidCell.id[1]===Number(this.activeCell.id[1])-1+""?"left":
            this.voidCell.id[1]===Number(this.activeCell.id[1])+1+""?"right":
            null;
        }else{
            action=null;
        }
        return action;
    }
}
export default cellActions;