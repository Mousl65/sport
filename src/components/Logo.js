import React from 'react';
import logos2 from "../logos2.png"
/*import { motion } from 'framer-motion';*/
const Logo =() => {

   /* const variants = {
        in:{
          opacity:1,
          x:0,
        },
        out: {
          opacity:0,
          x:300,
        }
      }
      const transition ={
        ease: [.03,.87,.73,.0],
        duration: .6,
      }*/
    return (
        <div>
      
        <img className="logos2" src = {logos2} alt = ""/>
       
       
        </div>
    );
};

export default Logo;