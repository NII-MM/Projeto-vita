import { Fragment } from "react/jsx-runtime"
import "./styles/global.css"
import "./styles/theme.css"
import { Heading } from "./components/Heading"
import { TimerIcon } from "lucide-react"
 
 export function App(){
  console.log("Olá Mundo!")
  return(
    <Fragment> 
         <Heading>Hello World 0! 
          <button><TimerIcon></TimerIcon></button></Heading>   
         
      <div className="container">
       <div className="content">
           </div>
      </div>         

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit iptum.
        Omnis alias cupiditate eaque caesar ad ipsum nobis esse repellat soluta illum quisquam laboriosam autem nesciunt sit reprehenderit porro, 
        quia eum libero aegyptus quidem.
      </p>
  </Fragment>
  )
  }
