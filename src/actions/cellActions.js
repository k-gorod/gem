import Display from "../display";

class cellActions{
    constructor(cell){
        this.cell=cell;
        this.display = new Display();
    }
    clickHandler(){
        this.checkPosition()?this.moveCell(this.cell):this.cellError();
    }
    moveCell(){
    this.display.cellMotion(this.cell)
    .then(()=>{
        console.log('here')
    })
        
            
        
        
    }
    checkPosition(){
        let boolean=true;
        //----
        return boolean;
    }
}
export default cellActions;