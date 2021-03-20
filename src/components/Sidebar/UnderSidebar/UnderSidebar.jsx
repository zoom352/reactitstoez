import s from './UnderSidebar.module.css';

const UnderSidebar = (props) => {
    return(
        <div className={s.item}>
           <img src='https://i.pinimg.com/originals/82/93/82/82938270330e979881e65a05016c1fa0.jpg'/>{props.name}   
           <img src='https://i.pinimg.com/originals/82/93/82/82938270330e979881e65a05016c1fa0.jpg'/>{props.name}
           <div className={s.qwq}>
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/1200px-Green_sphere.svg.png'/>
           </div>
             
        </div>
    )
}

export default UnderSidebar;