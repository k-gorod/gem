import React, { Component } from 'react';

class Cell extends Component{
    
    constructor(props){
        super(props)
        this.number = props.number;
        this.id = props.id;
    }
    render (){
        return (
            <div className={"field__cell"+(this.number===0?" void":"")} id={this.id}>
                {this.number!==0?<div className="field__cell__inside">{this.number}</div>:null}
            </div>
        )
    } 
        
    
    
    
}

export default Cell;