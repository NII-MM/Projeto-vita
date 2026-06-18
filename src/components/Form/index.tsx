import style from './Form.module.css'

export function Container({children}: ContainerProps){
     return (
        <div className={style.containerFluid}>
        <div className={style.content}>
                   <div className={style.content}>{children}</div>
            </div>
       </div>         
     )
}