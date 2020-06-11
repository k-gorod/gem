class Display{
    async cellMotion(cell,side){
        let toDo=
        side==='right'?'translateX(':
        side==='left'?'translateX(-':
        side==='down'?'translateY(':
        side==='up'?'translateY(-':
        "";
        await new Promise((res)=>{
            setTimeout(()=>{res(true)},100);
            for(let i = 0; i <= 20;i++){
                setTimeout(()=>{cell.setAttribute('style','transform: '+toDo+''+i*5+'%);')},5*i);
            }
          })
    }
}
export default Display;