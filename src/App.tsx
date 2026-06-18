import { Container } from './components/Container';
import { Heading } from './components/Heading';
import {CountDown} from './components/CountDown';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
import { DefaultInput } from './components/DefaultInput';

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
                        <DefaultInput type='text' />
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
                </form>             
            </Container>
    
        </>
  );
}