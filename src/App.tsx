import { Fragment } from "react/jsx-runtime"
import "./styles/global.css"
import "./styles/theme.css"
import { Heading } from "./components/Heading"
 
 export function App(){
  console.log("Olá Mundo!")
  return(
    <Fragment> 
         <Heading>Hello World 0!</Heading>   
         <Heading>Hello World 1!</Heading>   
         <Heading>Hello World 2!</Heading>   
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Omnis alias cupiditate eaque ad ipsum nobis esse repellat soluta illum quisquam laboriosam autem nesciunt sit reprehenderit porro, 
        quia eum libero quidem.
      </p>
  </Fragment>
  )
  }
