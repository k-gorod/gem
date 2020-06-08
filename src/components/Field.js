import React, { Component } from 'react';
import Cell from './Cell'


class Field extends Component{
    constructor(props){
        super(props)
        this.array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
    render (){
        return (
            <div className="field">
               {this.array.map(num => <Cell number={num} key={num}></Cell>)}
            </div>
        )
    } 
        
    
    
    
}

export default Field;