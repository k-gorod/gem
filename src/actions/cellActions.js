import Display from "../display";

class cellActions{
    constructor(activeCell){
        this.activeCell=activeCell;
        this.display = new Display();
        this.voidCell = document.getElementsByClassName('void')[0];
    }
    clickHandler(){
        this.checkPosition()?this.moveCell(this.activeCell):this.cellError();
    }
    moveCell(){
        this.display.cellMotion(this.activeCell,this.checkPosition())
        .then(()=>{
            const newVoidId = this.activeCell.id;
            this.activeCell.id = this.voidCell.id;
            this.activeCell.removeAttribute('style');
            this.voidCell.id = newVoidId;
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
        console.log(this.voidCell,this.activeCell)
        return action;
    }
}
export default cellActions;