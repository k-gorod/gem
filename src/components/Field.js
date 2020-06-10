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
        let ArrOfCells = cellNumbers(this.state.fieldType).map(numb => 
            <Cell number = {numb} key = {numb} ></Cell>
        )
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