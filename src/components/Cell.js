import React, { Component } from 'react';

class Cell extends Component{
    
    constructor(props){
        super(props)
        this.number = props.number;
    }
    render (){
        return (
            <div className="field__cell">
                {this.number}
            </div>
        )
    } 
        
    
    
    
}

export default Cell;