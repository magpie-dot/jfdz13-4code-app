import React from "react"
import style from "./Blog.module.css";
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import Pie from "./Pie"



const BehavioralAdvice = () => {
    
    return(
        <>
        
      <div><span><h1>Ruszyła unikalna ogólnopolska</h1></span> 
          <span><h1>wyszukiwarka zwierząt do adopcji!</h1></span></div>
          <div className={style.logoContainer}>
              <img  className={style.log} src="images/zd33.jpg" />
             <Pie/>
         
            </div>
      <div>kupa</div>
   

</>
    );
}

export default BehavioralAdvice

 

 
  

  


