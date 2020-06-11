import React from 'react';
import Field from './components/Field'
import cellActions from './actions/cellActions'

function App() {
    window.onload = () => {
        document.getElementsByClassName('field')[0].addEventListener('mousedown',(e)=>{
            var action = new cellActions(e.target.parentElement);
            action.clickHandler();
        })
        

    }
        
    
    return (
        <Field fieldType={4}/>
    )
}
export default App;