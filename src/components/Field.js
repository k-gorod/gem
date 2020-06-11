import React, { Component } from 'react';
import Cell from './Cell'
import cellNumbers from './cellNumbers'

class Field extends Component{
    constructor(props){
        super(props)
        this.state = {
            fieldType: props.fieldType
        }
        
    }

    selectListChanging(changing){
        this.setState({
            fieldType : changing?changing:this.props.fieldType
        })
    }

    createField(){
        let ArrOfCells = cellNumbers(this.state.fieldType);
        
        for(let i = 0; i < ArrOfCells.length;i++){
            for(let n = 0; n < ArrOfCells[i].length;n++){
                ArrOfCells[i][n]=
                <Cell
                    number = {ArrOfCells[i][n]} 
                    key = {i*this.state.fieldType+n+1} 
                    id={'c'+(n+1)+'-'+(i+1)}
                >
                    
                </Cell>;
            }
        }
        return (
            <div className='field'>
                {ArrOfCells}
            </div>
        );
    }
    render (){
        return this.createField();
    } 
}

export default Field;