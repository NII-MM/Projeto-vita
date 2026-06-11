import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import './App.css'


export function App(){
  const [count, setCount] = useState<number>(0)

  const incrementar = () => setCount(count + 1)
  const decrementar = () => setCount(count - 1)
  const resetar = () => setCount(0)

  return (
    <>
   <div className='app'>
    <header className='app-header'>
    <h1> Meu Primeiro App React</h1>
    <p>Contador: <strong>{count}</strong></p>

  <div classname=

    </>

  );
}

export default App
