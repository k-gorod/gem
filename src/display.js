class Display{
    constructor(cell){
        this.cell=cell;
    }
    async cellMotion(side){
        let toDo=
        side==='right'?'translateX(':
        side==='left'?'translateX(-':
        side==='down'?'translateY(':
        side==='up'?'translateY(-':
        "";
        await new Promise((res)=>{
            setTimeout(()=>{},100);
            for(let i = 0; i < 20;i++){
                setTimeout(()=>{
                    if(i===19)res(true);
                    this.cell.setAttribute('style','transform: '+toDo+''+i*5+'%);')},
                5*(i+1));
            }
          })
    }
    async cellErrorAnimation(err){
        await new Promise((res)=>{
            setTimeout(()=>{},100);
            for(let i = 0; i < 20;i++){
                setTimeout(()=>{
                    if(i===19)res(true);
                    err.setAttribute('style','opacity:'+0.1*(i<10?(i+1):20-(i+1)))
                    console.log()
                },
                    
                20*(i+1));
            }
          })
    }
}
export default Display;