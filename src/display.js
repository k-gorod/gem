class Display{
    async cellMotion(cell,side){
        await new Promise((res)=>{
            setTimeout(()=>{res(true)},100);
            for(let i = 0; i <= 20;i++){
                setTimeout(()=>{cell.parentElement.setAttribute('style','transform: translateX('+i*5+'%);')},5*i);
            }
          })
    }
}
export default Display;