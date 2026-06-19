import React from 'react';
import styles from './styles.module.css'


type DefaultInputProps = {} & React.ComponentProps<'input'>;


export function DefaultInput({type}: DefaultInputProps) {
    return(
        <>
            <label htmlFor='myInput'>task</label>
            <input id="myInput" type={type} />
        </>        
    );
    
    /*<DefaultInput type="text" placeholder="Digite sua tarefa" />*/


    //<DefaultInput type="number" id="focus" value={25}>
    // </DefaultInput>

    /*<DefaultInput type="number" id="focus-time" value={5} onChange={...} />
    <DefaultInput type="number" value={15} onchange{...} />*/

}



