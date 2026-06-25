import { Container } from './components/Container';
import { Heading } from './components/Heading';
import {CountDown} from './components/CountDown';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PauseCircleIcon, PlayCircleIcon } from 'lucide-react';

export function App(){
 
  return (
        <>
            <Container>
                <Logo />
            </Container>
            
            <Container>
                <Menu/>
            </Container>

             <Container>
                <CountDown/>
             </Container>

            <Container>
                <Heading>FOOTER</Heading>
            </Container>

            <Container>
                <form className="form" action="">
                    <div className="formRow">
                        <DefaultInput
                        labelText='Task'
                        id="myInput" 
                        type='text'
                        placeholder='Enter your task' required />
                    </div>
                    <div className='formRow'>
                        <p>Lorem ipsum, velit ratione officiis corrupti totam itaque enim molestiae culpa fugit et at, dolorum excepturi. magnam.</p>
                    </div>
                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0</p>
                    </div>
                    <div className='formRow'>
                        <button type="submit">Add Task</button>
                    </div>

                    <DefaultButton
                       icon={<PlayCircleIcon />}
                      // onClick={}
                    />

                    <DefaultButton
                       icon={<PauseCircleIcon />}
                       color='red'
                       //disabled={}
                    />

                    <div className='formRow'>
                        <Cycles />
                    </div>
                </form>             
            </Container>
    
        </>
  );
}