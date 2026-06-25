import React from 'react';
import Styles from './styles.module.css';


type DefaultInputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;


export function DefaultInput({id, type, labelText, ...rest}: 
    DefaultInputProps) {
    return(
        <>
          <div>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input id={id} type={type} {...rest}/>
          </div> 

          <input
            id={id}
            type={type}
            className={Styles.input}
            {...rest} />
        </>        
    );
    
    /*<DefaultInput type="text" placeholder="Digite sua tarefa" />*/


    //<DefaultInput type="number" id="focus" value={25}>
    // </DefaultInput>

    /*<DefaultInput type="number" id="focus-time" value={5} onChange={...} />
    <DefaultInput type="number" value={15} onchange{...} />*/

}



