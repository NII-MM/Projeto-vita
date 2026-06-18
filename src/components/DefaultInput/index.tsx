import style from './styles.module.css'


    type DefaultInputProps = {
        type: 'text' | 'number' | 'search' | 'email' | 'password';
    }

    type DefaultInput = () & React.ComponentProps<'input'>;

export function DefaultInput() {
    return(
        <div>
            <label htmlFor='myInput'>task</label>
            <input id="myInput" type='text' />
        </div>
    );
}



